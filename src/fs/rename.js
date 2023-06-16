import {rename as fsRename} from 'node:fs/promises'
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {isFolderExists} from '../helpFunctions/fs.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const oldPath = join(__dirname, 'files', 'wrongFilename.txt')
const newPath = join(__dirname, 'files', 'properFilename.md')

const rename = async () => {


    const isOldFileExist = await isFolderExists(oldPath)
    if (!isOldFileExist) throw new Error('FS operation failed: file wrongFilename.txt isn`t exist')

    const isFileRenamed = await isFolderExists(newPath)
    if (isFileRenamed) throw new Error('FS operation failed: file properFilename.md already exist')

    await fsRename(oldPath, newPath)
    console.log('File renamed')

};

await rename();