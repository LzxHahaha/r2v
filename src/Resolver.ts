import * as t from 'babel-types';
import traverse, { NodePath } from 'babel-traverse';
import * as babylon from 'babylon';

export default class Resolver {
    dependencies: string[] = [];
    
    constructor(public code: string) {}

    rootVisitor() {
        const self = this;

        return {
            CallExpression(path: NodePath<t.CallExpression>, state: Resolver) {
                const callee = path.node.callee;
                if (!t.isIdentifier(callee) || callee.name !== 'define') {
                    return;
                }
    
                const args = path.node.arguments;
                const dependencies = args[0] as t.ArrayExpression;
                
                for (const node of dependencies.elements) {
                    state.dependencies.push((node as t.StringLiteral).value);
                }

                // TODO: analyze and load files first
                // html process

                path.traverse(self.bodyVisitor(), this);
            }
        };
    }

    bodyVisitor() {
        return {
            FunctionExpression(path: NodePath<t.FunctionExpression>, state: any) {
                // TODO: get params, read config to ignore global modules
                // goto return expression
                // get mixins/componets etc. and merge mixin if used
            }
        };
    }

    defineVisitor() {
        return {
            // get functions from config
        };
    }

    functionVisitor() {
        return {
            // change this.data.xxx to this.xxx
            // change life cycle, watch and computed
            // save undefined fields from this.data.xxx (set to props)
        };
    }

    start() {
        const ast = babylon.parse(this.code);
        traverse(ast, this.rootVisitor(), undefined, this);
    }
}
