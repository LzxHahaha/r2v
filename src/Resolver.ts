import * as t from 'babel-types';
import traverse, { NodePath } from 'babel-traverse';
import * as babylon from 'babylon';

enum ModuleType {
    Unknown,
    Object,
    Component,
    Template,
    Style
};

class ModuleInfo {
    loaded: boolean = false;
    type: ModuleType = ModuleType.Unknown;
    // TODO: module info fields

    constructor(public path: string) {}
}

export default class Resolver {
    paths: string[] = [];
    modules = new Map<string, ModuleInfo>();

    constructor(public globalComponents = new Set<string>(), public globalModules = new Set<string>()) {}

    start(code: string) {
        const ast = babylon.parse(code);
        traverse(ast, this.rootVisitor(), undefined, this);
    }

    private loadModule(path: string) {
        const module = this.modules.get(path);
        if (!module || module.loaded) {
            return;
        }

        switch (module.type) {
            case ModuleType.Template:
                // TODO: HTML resolver
                break;
            case ModuleType.Style:
                // TODO: save style info
                break;
            case ModuleType.Component:
                // TODO: resolve component
                break;
            default:
                break;
        }
        module.loaded = true;
    }

    private rootVisitor() {
        return {
            CallExpression(path: NodePath<t.CallExpression>, state: Resolver) {
                const callee = path.node.callee;
                if (!t.isIdentifier(callee) || callee.name !== 'define') {
                    return;
                }
    
                const args = path.node.arguments;
                const dependencies = args[0] as t.ArrayExpression;
                
                // 解析引入文件信息
                for (const node of dependencies.elements) {
                    let path = (node as t.StringLiteral).value;
                    if (/^text!/.test(path)) {
                        path = path.substr(5);
                    }
                    // TODO: 改为绝对路径

                    state.paths.push(path);
                    if (state.modules.has(path)) {
                        return;
                    }

                    const module = new ModuleInfo(path);
                    if (state.globalComponents.has(path)) {
                        module.type = ModuleType.Component;
                        module.loaded = true;
                    } else if (state.globalModules.has(path)) {
                        module.type = ModuleType.Object;
                        module.loaded = true;
                    } else if (/\.html$/.test(path)) {
                        module.type = ModuleType.Template;
                    } else if (/\.(css|less|sass|scss)/.test(path)) {
                        module.type = ModuleType.Style;
                    }
                }

                path.traverse(state.bodyVisitor(), this);
                path.stop();
            }
        };
    }

    private bodyVisitor() {
        return {
            CallExpression(path: NodePath<t.CallExpression>, state: Resolver) {
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
            FunctionExpression(path: NodePath<t.FunctionExpression>, state: any) {
                console.log(path);
                // TODO: get params, read config to ignore global modules
                // goto return expression
                // get mixins/componets etc. and merge mixin if used
            }
        };
    }

    private defineVisitor() {
        return {
            // get functions from config
        };
    }

    private functionVisitor() {
        return {
            // change this.data.xxx to this.xxx
            // change life cycle, watch and computed
            // save undefined fields from this.data.xxx (set to props)
        };
    }
}
