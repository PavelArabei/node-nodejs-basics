import {access, mkdir, readdir, copyFile, stat} from 'node:fs/promises';


import {join} from 'node:path';

export const isFolderExists = async (folderPath) => {
    try {
        await access(folderPath);
        return true;
    } catch (error) {
        return false;
    }
}

export const copyF = async (sourcePath, targetPath) => {
    const files = await readdir(sourcePath);
    await mkdir(targetPath);

    for await (const file of files) {
        const sourceFilePath = join(sourcePath, file);
        const targetFilePath = join(targetPath, file);
        const stats = await stat(sourceFilePath);

        if (stats.isDirectory()) await copyF(sourceFilePath, targetFilePath);
        else await copyFile(sourceFilePath, targetFilePath);
    }
}