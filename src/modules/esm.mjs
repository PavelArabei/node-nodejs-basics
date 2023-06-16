import {readFile} from 'fs/promises';
import {fileURLToPath} from 'node:url';
import {dirname} from 'node:path';
import * as path from 'node:path'
import {release, version} from 'node:os';
import {createServer as createServerHttp} from 'node:http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname)
import './files/c.js';

const random = Math.random();

let unknownObject;

const parseFile = async (currentPath) => {
    const filePath = path.join(__dirname, `${currentPath}`)
    const fileData = await readFile(filePath, 'utf8')
    return JSON.parse(fileData);
}

if (random > 0.5) {
    unknownObject = await parseFile('./files/a.json')
} else {
    unknownObject = await parseFile('./files/b.json')
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

// module.exports = {
//     unknownObject,
//     myServer,
// };

