import {pipeline} from 'node:stream/promises';
import {Transform} from 'node:stream';
import {stdin, stdout, exit} from 'node:process';


const transform = async () => {
    stdout.write('Press ctrl+c or write .exit to exit\n')

    const exitOnWord = (chunk) => {
        const data = chunk.toString().trim()
        if (data === '.exit') exit()
    }

    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversedChunk = chunk
                .toString()
                .trim()
                .split('')
                .reverse()
                .join('') + '\n';

            callback(null, reversedChunk);
        }
    });

    await pipeline(
        stdin.on('data', (chunk) => exitOnWord(chunk)),
        reverseTransform,
        stdout
    )

};

await transform();