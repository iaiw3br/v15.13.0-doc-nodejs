const fs = require('fs');
function showErr(err) {
    console.log(err.message);
}
// Callback API
/*
* fs.access(path[, mode], callback)
* Проверка прав на файл по переданному пути
* */
// const file = 'index.txt';
// fs.access(file, fs.constants.F_OK, (err) => {
//     console.log(`${file} ${err ? 'does not exist' : 'exists'}`); // exists
// })


/*
* fs.appendFile(path, data[, options], callback)
* Добавляет данные в файл, если он не создан, то создаёт.
* */
// fs.appendFile('index1.txt', 'i love callback, sorry it is not true', err => {
//     if (err) throw err;
//     console.log('successful');
// })


/*
* fs.chmod(path, mode, callback)
* Изменяет права на файл.
* */
// fs.chmod('index1.txt', 0o775, (err) => {
//     if (err) throw err;
//     console.log('The permissions for file "my_file.txt" have been changed!');
// });

/*
* fs.chown(path, uid, gid, callback)
* Меняет владельца у файла.
* */


/*
* fs.close(fd[, callback])
* закрывает файловый дескриптор.
* */


/*
* fs.copyFile(src, dest[, mode], callback)
* копирует файлы из src в dest
* */
// fs.copyFile('index1.txt', './fffdqAgpa/badboys.txt', (err) => {
//     if (err) showErr(err);
// })


/*
* fs.createReadStream(path[, options])
* Позволяет читать файл, создавая поток.
* */
// const readStream = fs.createReadStream('./index1.txt');
// readStream.on('open', data => console.log(readStream.pipe()));
// readStream.on('err', err => console.log(err.message))


/*
* fs.createWriteStream(path[, options])
* Позволяет записывать данные в файл, создавая поток.
* */


/*
* fs.fchmod(fd, mode, callback)
* Устанавливает права доступа к файлу.
* */


/*
* fs.fchown(fd, uid, gid, callback)
* Меняет владельца у файла.
* */


/*
* fs.fdatasync(fd, callback)
* TODO: Не нашёл примеров, вернуться.
* */


/*
* fs.fstat(fd[, options], callback)
* Отображает информацию по файлу.
* */


/*
* fs.fsync(fd, callback)
* TODO: Не нашёл примеров, вернуться.
* */


/*
* fs.ftruncate(fd[, len], callback)
* TODO: Не нашёл примеров, вернуться.
* */


/*
* fs.futimes(fd, atime, mtime, callback)
* Изменяет временные мерки у файла atime, mtime
* */


/*
* fs.lchmod(path, mode, callback)
* Изменяет права к символичной ссылке.
* */


/*
* fs.lchown(path, uid, gid, callback)
* Устанавливает владельца к символичной ссылке.
* */


/*
* fs.lutimes(path, atime, mtime, callback)
* изменяет время доступа к файлу.
* */


/*
* fs.link(existingPath, newPath, callback)
* создаёт новую ссылку из existingPath к newPath
* */


/*
* fs.lstat(path[, options], callback)
* получает stat для символической ссылки.
* */


/*
* fs.mkdir(path[, options], callback)
* создаёт директорию.
* */


/*
* fs.mkdtemp(prefix[, options], callback)
* создаёт уникальную директорию.
* */


/*
* fs.open(path[, flags[, mode]], callback)
* открытие файла.
* */


/*
* fs.opendir(path[, options], callback)
* открытие директории.
* */


/*
* fs.read(fd, buffer, offset, length, position, callback)
* чтение данных из файла по fd.
* callback принимает err, bytesRead, buffer
* */


/*
* fs.readdir(path[, options], callback)
* Чтение содержимого каталога.
* */


/*
* fs.readFile(path[, options], callback)
* чтение данных файла
* */
// fs.readFile('./index.txt','utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })


/*
* fs.readlink(path[, options], callback)
* читает данные по символической ссылке.
* */


/*
* fs.realpath(path[, options], callback)
* вычисляет путь
* */
// fs.realpath(__dirname+'\\..', (err, resolvedPath) => {
//     if (err) throw err;
//     console.log(resolvedPath) // C:\projects\doc-nodejs
// })


/*
* fs.realpath.native(path[, options], callback)
* Асинхронный realpath
* */


/*
* fs.rename(oldPath, newPath, callback)
* изменяет название у файла.
* */


/*
* fs.rmdir(path[, options], callback)
* Удаляет директорию.
* */


/*
* fs.rm(path[, options], callback)
* delete files or directories
* */


/*
* fs.stat(path[, options], callback)
* show stat on file
* */


/*
* fs.symlink(target, path[, type], callback)
* create link called path.
* */


/*
* fs.truncate(path[, len], callback)
* Обрезает файл.
* */


/*
* fs.unlink(path, callback)
* delete directories, use fs.rmdir();
* */


/*
* fs.unwatchFile(filename[, listener])
* stop watching for changes on filename;
* */


/*
* fs.utimes(path, atime, mtime, callback)
* change file timestamp;
* */


/*
* fs.watch(filename[, options][, listener])
* fs.watchFile(filename[, options], listener)
* watch changes on filename;
* */


/*
* fs.write(fd, buffer[, offset[, length[, position]]], callback)
* fs.write(fd, string[, position[, encoding]], callback)
* write buffer to specific fd.
* */


/*
* fs.writeFile(file, data[, options], callback)
* asynchronously writes data to the file.
* */


/*
* fs.writev(fd, buffers[, position], callback)
* write an array of ArrayBufferView to the file specified by fd using writev();
* */
