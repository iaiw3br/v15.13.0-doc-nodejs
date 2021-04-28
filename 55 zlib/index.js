const zlib = require('zlib');
const {pipeline} = require('stream');
const util = require('util');
const {
    createReadStream,
    createWriteStream
} = require('fs');

/*
* Модуль предоставляет функции сжатия используя Gzip, Deflate/Inflate, Brotli
* архивирование и разархивирование происходит с помощью потоков api
* */
// const gzip = zlib.createGzip();
// const source = createReadStream('input.txt');
// const destination = createWriteStream('input.txt.gz');
//
// pipeline(source, gzip, destination, (err) => {
//     if (err) {
//         console.error('And error occurred', err);
//         process.exit(1);
//     }
// });
//
// const pipe = util.promisify(pipeline);
//
// async function doGzip (input, output) {
//     const gzip = zlib.createGzip();
//     const source = createReadStream(input);
//     const destination = createWriteStream(output);
//     await pipe(source, gzip, destination);
// }
//
// doGzip('input.txt', 'input.txt.gz')
//     .catch(err => {
//         console.error('And error occurred', err);
//         process.exit(1);
//     })
