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
                const dependencies = 
                
                
                
                
                args[0] as t.ArrayExpression;
                const define = args[1] as t.FunctionExpression;
                
                for (const node of dependencies.elements) {
                    state.dependencies.push((node as t.StringLiteral).value);
                }

                path.traverse(self.bodyVisitor(), this);
            }
        };
    }

    bodyVisitor() {
        return {
            FunctionExpression(path: NodePath<t.FunctionExpression>, state: any) {
                console.log(state);
            }
        };
    }

    start() {
        const ast = babylon.parse(this.code);
        traverse(ast, this.rootVisitor(), undefined, this);
    }
}
