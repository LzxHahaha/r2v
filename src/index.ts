import fs from 'fs';
import path from 'path';

import Resolver from './Resolver';

const filePath = path.resolve(__dirname, '../resources/test.js');
const code = fs.readFileSync(filePath).toString();

const resolver = new Resolver(code);
resolver.start();
console.log(resolver);
