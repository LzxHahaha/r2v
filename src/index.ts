import path from 'path';

import Resolver from './Resolver';

const basePath = path.resolve(__dirname, '../resources');

const resolver = new Resolver(
    basePath,
    new Set(['pro/BaseComponent']),
    new Set(['pro/util'])
);
resolver.start('./index.js')
    .then(entry => console.log(entry))
    .then(() => console.log(resolver.modules))
