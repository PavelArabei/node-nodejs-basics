import {createGunzip} from 'node:zlib';
import {pipeline} from 'node:stream/promises';
import {createReadStream, createWriteStream} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const sourcePath = join(__dirname, 'files', 'archive.gz')
    const targetPath = join(__dirname, 'files', 'fileToCompress.txt')

    const unzip = createGunzip();
    const rs = createReadStream(sourcePath);
    const ws = createWriteStream(targetPath);

    await pipeline(rs, unzip, ws)
};

await decompress();