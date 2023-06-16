import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {isFolderExists, copyF} from '../helpFunctions/fs.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filesPath = join(__dirname, 'files')
const targetPath = join(__dirname, 'files-copy')


const copy = async () => {

    const isSourceFolderExists = await isFolderExists(filesPath);
    if (!isSourceFolderExists) throw new Error('FS operation failed: Source folder does not exist')

    const isTargetFolderExists = await isFolderExists(targetPath);
    if (isTargetFolderExists) throw new Error('FS operation failed: Target folder already exists')

    await copyF(filesPath, targetPath)
    console.log('Files copied')
};

await copy();