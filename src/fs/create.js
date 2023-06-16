import {writeFile} from 'node:fs/promises';
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {isFolderExists} from '../helpFunctions/fs.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {

    const path = join(__dirname, 'files', 'fresh.txt')
    const text = 'I am fresh and young';

    const isFileExist = await isFolderExists(path)
    if (isFileExist) throw new Error('FS operation failed: File already exists');

    await writeFile(path, text, {encoding: 'utf8'});
    console.log('File created successfully.')

};

await create();