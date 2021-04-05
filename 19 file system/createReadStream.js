const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer((req, res) => {
    const fileName = path.join(__dirname, req.url);
    const readStream = fs.createReadStream(fileName);
    readStream.on('open', () => readStream.pipe(res));
    readStream.on('error', err => console.log(err.message));
}).listen(3000);
