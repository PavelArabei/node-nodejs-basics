import {createReadStream} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';
import {stdout} from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const read = async () => {
    const path = join(__dirname, 'files', 'fileToRead.txt')
    const rs = createReadStream(path)

    rs.on('data', (data) => {
        stdout.write(data)
    })

};

await read();