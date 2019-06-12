import path from 'path';

import Resolver from './Resolver';

const basePath = path.resolve(__dirname, '../resources');

const resolver = new Resolver(
    basePath,
    new Set(['pro/BaseComponent']),
    new Set(['pro/util'])
);
const entry = resolver.start('./index.js');

console.log(entry);
