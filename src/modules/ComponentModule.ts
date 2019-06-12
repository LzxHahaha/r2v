import * as t from 'babel-types';
import traverse, { NodePath } from 'babel-traverse';
import * as babylon from 'babylon';

import Module, { ModuleType } from './Module';

/**
 * 组件类型，支持extend/use/component/filter等操作
 */
export default class ComponentModule extends Module {
    readonly type = ModuleType.Component;
    dependencies: string[] = [];

    constructor(path: string, isLoaded = false) {
        super(path);
        // 公共组件直接加载，无须再次调用
        this.loaded = isLoaded;
    }

    async load() {
        if (this.loaded) {
            return;
        }

        const code = await this.readFile();
        const ast = babylon.parse(code);
        traverse(ast, this.rootVisitor, undefined, this);
    }

    private readonly rootVisitor = {
        CallExpression(path: NodePath<t.CallExpression>, state: ComponentModule) {
            const callee = path.node.callee;
            if (!t.isIdentifier(callee) || callee.name !== 'define') {
                return;
            }

            const args = path.node.arguments;
            const dependencies = args[0] as t.ArrayExpression;
            
            for (const node of dependencies.elements) {
                let importPath = (node as t.StringLiteral).value;
                state.dependencies.push(importPath);
            }

            path.traverse(state.bodyVisitor, state);
            path.stop();
        }
    }

    private readonly bodyVisitor = {
        CallExpression(path: NodePath<t.CallExpression>) {
            const callee = path.node.callee;
            if (!t.isMemberExpression(callee)) {
                return;
            }
            const { property, object } = callee;
            if (!t.isIdentifier(property) || !t.isIdentifier(object)) {
                return;
            }
            console.log(property.name);
            if (property.name === 'extend' && object.name) {}
        },
        FunctionExpression(path: NodePath<t.FunctionExpression>) {
            console.log(path);
            // TODO: get params, read config to ignore global modules
            // goto return expression
            // get mixins/componets etc. and merge mixin if used
        }
    }

    private readonly defineVisitor = {
        // get functions from config
    }

    private readonly functionVisitor = {
        // change this.data.xxx to this.xxx
        // change life cycle, watch and computed
        // save undefined fields from this.data.xxx (set to props)
    }
}
