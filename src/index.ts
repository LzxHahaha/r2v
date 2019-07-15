import path from 'path';

import Resolver from './Resolver';

async function main() {
    const basePath = path.resolve(__dirname, '../resources');
    
    const resolver = new Resolver(
        basePath,
        new Set(['pro/BaseComponent']),
        new Set(['pro/util'])
    );
    const entry = await resolver.start('./test.js');
    console.log(entry);
    console.log(resolver.modules);
}

main();
