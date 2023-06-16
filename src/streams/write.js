import {createWriteStream} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';
import {stdin, stdout, exit} from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const path = join(__dirname, 'files', 'fileToWrite.txt')
    const ws = createWriteStream(path)

    stdout.write('Press ctrl+c or write .exit to exit\n')

    stdin.on('data', (chank) => {
        const data = chank.toString()
        if (data.trim() === '.exit') exit()
        ws.write(data)
    })


};

await write();