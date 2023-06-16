import {Worker} from 'node:worker_threads'
import os from 'node:os'
import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {

    const workerPath = join(__dirname, 'worker.js')
    const workers = []

    const createWorker = (data) => {
        return new Promise((res) => {
            const worker = new Worker(workerPath, {workerData: data + 10})
            worker.on('message', (message) => res(message))
        })
    }

    os.cpus().forEach((el, i) => {
        const workerPromise = createWorker(i)
        workers.push(workerPromise)
    })

    const workerResults = await Promise.all(workers);
    console.log(workerResults)

};

await performCalculations();
