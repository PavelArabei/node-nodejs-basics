import {unlink} from 'node:fs/promises'
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {isFolderExists} from '../helpFunctions/fs.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToDelete = join(__dirname, 'files', 'fileToRemove.txt')

const remove = async () => {

    const isFileExist = await isFolderExists(fileToDelete)
    if (!isFileExist) throw new Error('FS operation failed: file isn`t exist')

    await unlink(fileToDelete)
    console.log('The file has been deleted')
};

await remove();