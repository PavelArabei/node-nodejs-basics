import {readFile} from 'node:fs/promises'
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {isFolderExists} from '../helpFunctions/fs.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToRead.txt')

const read = async () => {

    const isFileExist = await isFolderExists(filePath)
    if (!isFileExist) throw new Error('FS operation failed: Folder isn`t exist')

    const file = await readFile(filePath, {encoding: 'utf8'})
    console.log(file)

};

await read();