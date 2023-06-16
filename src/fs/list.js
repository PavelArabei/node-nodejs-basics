import {readdir} from 'node:fs/promises'
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {isFolderExists} from '../helpFunctions/fs.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const folderPath = join(__dirname, 'files')

const list = async () => {

    const isFolderExist = await isFolderExists(folderPath)
    if (!isFolderExist) throw new Error('FS operation failed: Folder isn`t exist')

    const fileNamesArray = await readdir(folderPath)
    fileNamesArray.forEach(file => console.log(file))

};

await list();