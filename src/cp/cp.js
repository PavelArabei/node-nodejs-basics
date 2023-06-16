import {spawn} from 'node:child_process'
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const spawnChildProcess = async (args) => {
    const pathToScript = join(__dirname, 'files', 'script.js')
    const childProcess = spawn(`node`, [pathToScript, ...args]);

    childProcess.stdout.on('data', (data) => process.stdout.write(data));

    process.stdin.on('data', (data) => childProcess.stdin.write(data));

    childProcess.on('close', (code) => {
        console.log(`Child process terminated with code ${code}`);
        process.stdin.end();
    });
};

spawnChildProcess(['someArgument1', 'someArgument2',]);
