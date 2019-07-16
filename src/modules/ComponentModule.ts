import * as t from 'babel-types';
import traverse, { NodePath } from 'babel-traverse';
import * as babylon from 'babylon';

import Module, { ModuleType } from './Module';
import UnknownModule from './UnknownModule';

/**
 * 组件类型，支持extend/use/component/filter等操作
 */
export default class ComponentModule extends Module {
    readonly type = ModuleType.Component;
    dependencies: string[] = [];
    private varStack: Map<string, ModuleType>[] = [new Map()];

    private get varStackTop() {
        return this.varStack[this.varStack.length - 1];
    }

    constructor(
        path: string,
        isLoaded: boolean = false,
        private loadModule: (key: string) => Module = (key: string) => new UnknownModule(key)
    ) {
        super(path);
        // 公共组件直接标记加载完成
        this.loaded = !!isLoaded;
    }

    async load() {
        if (this.loaded) {
            return;
        }

        const code = await this.readFile();
        const ast = babylon.parse(code);
        traverse(ast, this.rootVisitor, undefined, this);
    }

    private findVar(name: string) {
        for (let i = this.varStack.length - 1; i >= 0; --i) {
            const scope = this.varStack[i];
            if (scope.has(name)) {
                return scope.get(name);
            }
        }
        return null;
    }

    // 查找 define 函数，通过依赖引入路径推断函数参数类型
    private readonly rootVisitor = {
        CallExpression(path: NodePath<t.CallExpression>, state: ComponentModule) {
            const callee = path.node.callee;
            if (!t.isIdentifier(callee) || callee.name !== 'define') {
                return;
            }

            const args = path.node.arguments;
            const dependencies = (args[0] as t.ArrayExpression).elements as t.StringLiteral[];
            const vars = (args[1] as t.FunctionExpression).params as t.Identifier[];
            const max = Math.min(dependencies.length, vars.length);
            
            for (let i = 0; i < max; ++i) {
                const depPath = dependencies[i].value;
                state.dependencies.push(depPath);

                const varName = vars[i].name;
                const module = state.loadModule(depPath);
                state.varStackTop.set(varName, module.type);
            }

            path.traverse(state.bodyVisitor, state);
            path.stop();
        }
    }

    // 查找 Component.extend
    private readonly bodyVisitor = {
        CallExpression(path: NodePath<t.CallExpression>, state: ComponentModule) {
            const callee = path.node.callee;
            if (!t.isMemberExpression(callee)) {
                return;
            }
            const { property, object } = callee;
            if (!t.isIdentifier(property) || !t.isIdentifier(object) || property.name !== 'extend') {
                return;
            }
            const callerType = state.findVar(object.name);
            if (callerType !== ModuleType.Component) {
                return;
            }
            path.traverse(state.defineVisitor);
        }
    }

    // 读取函数定义
    private readonly defineVisitor = {
        ObjectProperty(path: NodePath<t.ObjectProperty>) {
            const key = path.node.key as t.Identifier;
            if (key.name === 'config') {
                // get default data
                // to created
            } else if (key.name === 'init') {
                // to mounted
            } else {
                // ...
            }
        }
    }

    // 读取函数内容，修改 data/生命周期/watch/computed 等
    private readonly functionVisitor = {
        //
    }
}
