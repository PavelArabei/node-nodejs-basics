import {createReadStream} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';

const {createHash} = await import('node:crypto');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const path = join(__dirname, 'files', 'fileToCalculateHashFor.txt')
    const hash = createHash('sha256');
    const rs = createReadStream(path);

    rs.on('data', (data) => {
        hash.update(data)
    })

    rs.on('end', () => {
        const fileHash = hash.digest('hex');
        console.log(fileHash)
    });

};

await calculateHash();