const fs = require('fs');
const fsPromises = fs.promises;
/*
* fs модуль позволяет взаимодействовать с файлами.
* */
// const fs = require('fs/promises'); для промисов
// const fs = require('fs'); // коллбэки

// Promise example
// const {unlink} = require('fs/promises');
//
// (async function (path) {
//     try {
//         await unlink(path);
//         console.log('successful deleted', path);
//     } catch (err) {
//         console.error('there was an error', err.message);
//     }
// })('/tmp/hello')

// Callback example
// const {unlink} = require('fs/promises');
// unlink('/buz/hello', err => {
//     if (err) throw err;
//     console.log('successful deleted')
// })

// Synchronous example
// const { unlinkSync } = require('fs');
//
// try {
//     unlinkSync('/tmp/hello');
//     console.log('successfully deleted /tmp/hello');
// } catch (err) {
//     // handle the error
// }


/*
* Promises API
* fs/promises возвращает API обеспечивая асинхронные методы для работы с файлами.
* Промисы используют базовый пул потоков Node.js для выполнения операции файловой системы вне потока цикла событий.
* Эти операции не синхронизированы и не безопасны для потоков. Необходимо быть осторожным, чтобы несколько
* одновременных операции над одним файлом его не повредили.
* */


/*
* Class: FileHandle
* обёртка объекта для числового файлового дескриптора.
* экземпляр создаётся методом fsPromises.open().
* Все FileHandle объекты это EventEmitter.
* Если FileHandle не закрывается с помощью fileHandle.close(), он попытается автоматически закрыть дескриптор файла
* и выдаст предупреждение процесса, помогая предотвратить утечку памяти. Не нужно полагаться на такое поведение,
* потому что оно может быть не надёжным и файл не может быть закрыт. Всегда явно закрывайте FileHandle.
*
* Event: 'close'
* генерируется, когда FileHandle закрывается и не может использоваться.
*
* FileHandle.appendFile(data[, options])
* alias filehandle.writeFile()
* При работе с дескрипторами файлов режим не может быть изменён с того, который был установлен с помощью
* fsPromises.open(). Следовательно это тоже самое, что и filehandle.writeFile().
*
* filehandle.chmod(mode)
* изменяет права на файл.
*
* filehandle.chown(uid, gid)
* uid <integer> id нового владельца
* gid <integer> id новой группы
* Returns: При успехе выполняется с undefined
* Изменяет владельца у файла.
*
*
* filehandle.close()
* Returns: При успехе выполняется с undefined
* закрывает дескриптор при любой операции
*
*
* filehandle.datasync()
* Returns: При успехе выполняется с undefined
* Принудительно переводит все операции ввода-вывода в очереди, связанные с файлом, в состояние завершения
* синхронизированного ввода-вывода операционной системы.
*
*
* filehandle.fd
* Числовой дескриптор файла, управляемый объектом <FileHandle>.
*
*
* filehandle.read(buffer, offset, length, position)
* filehandle.read(options)
* buffer <Buffer> | <Uint8Array> Буфер.
* offset <integer> Место в буфере, с которого начинается заполнение. Default: 0
* length <integer> Количество байтов для чтения. Default: buffer.length
* position <integer> Место от куда следует начать чтение файла
* Returns: <Promise> при успешном выполнении объект с двумя свойствами:
* bytesRead <integer> количество прочитанных байтов.
* buffer <Buffer> | <Uint8Array> ссылка на переданный буфер аргумента.
* Читает данные из файла и сохраняет их в заданном буфере.
*
*
* filehandle.readFile(options)
* options <Object> | <string>
* encoding <string> | <null> Default: null
* signal <AbortSignal> позволяет прервать чтение файла.
* Асинхронно читает содержимое файла
*/
// const {open} = require('fs/promises');
//
// async function readFileH() {
//     const fileHandle = await open('./index.txt', 'r+');
//     const text = await fileHandle.readFile({encoding: 'utf8'});
//     return text;
// }
// readFileH().then(d => console.log(d))

/*
* filehandle.readv(buffers[, position])
* buffers <Buffer[]> | <TypedArray[]> | <DataView[]>
* position <integer> Место от куда следует начать чтение файла
* Returns: <Promise> при успешном выполнении объект с двумя свойствами:
* bytesRead <integer> количество прочитанных байтов.
* buffers <Buffer[]> | <TypedArray[]> | <DataView[]> свойство содержащее ссылку на буфер вход
* Чтение файла и запись в массив <ArrayBufferView>
*
*
* filehandle.stat([options])
*
*
* filehandle.sync()
* Returns: <Promise> При успехе выполняется с undefined
* Данные дескриптора были сброшены на запоминающее устройство.
*
*
* filehandle.truncate(len)
* len <integer> Default: 0
* Returns: <Promise> При успехе выполняется с undefined
* Обрезает файл.
*
* */
// const { open } = require('fs/promises');
//
// async function trunc() {
//     let filehandle = null;
//     try {
//         filehandle = await open('index.txt', 'r+');
//         await filehandle.truncate(4);
//     } finally {
//         filehandle?.close();
//     }
// }
// trunc().then()

/*
* filehandle.utimes(atime, mtime)
* изменить временные метки файла.
*
* filehandle.write(buffer[, offset[, length[, position]]])
* filehandle.write(string[, position[, encoding]])
* Записать буфер в файл
* */
// const {open} = require('fs/promises');
//
// async function wr() {
//     const buff = Buffer.from('Hello Cat');
//     let filehandle = null;
//     try {
//         filehandle = await open('index.txt', 'r+');
//         await filehandle.write(buff, 0, buff.length, 0);
//     } finally {
//         filehandle?.close();
//     }
// }
// wr().then()


/*
* filehandle.writeFile(data, options)
* data <string> | <Buffer> | <Uint8Array> | <Object>
* options <Object> | <string>
* encoding <string> | <null> The expected character encoding when data is a string. Default: 'utf8'
* Асинхронно записывает данные файл, если он есть - заменяет.
* */
// const {open} = require('fs/promises');
// async function wr() {
//     const buff = Buffer.from('Hello Cat');
//     let filehandle = null;
//     try {
//         filehandle = await open('index1.txt', 'w');
//         await filehandle.writeFile(`{Name:'Boriska'}`);
//     } finally {
//         filehandle?.close();
//     }
// }
// wr().then()


/*
* filehandle.writev(buffers[, position])
* buffers <Buffer[]> | <TypedArray[]> | <DataView[]>
* position <integer> Место от куда следует начать чтение файла
* Запись массива  <ArrayBufferView> в файл.
* */


/*
* fsPromises.access(path[, mode])
* path <string> | <Buffer> | <URL>
* mode <integer> Default: fs.constants.F_OK
* Returns: <Promise> При успехе выполняется с undefined
* Проверяет права пользователя на каталог или файл
* */
// const {access} = require('fs/promises');
// const {constants} = require('fs');
//
// async function acc() {
//     try {
//         await access('./index.txt', constants.R_OK | constants.W_OK);
//         console.log('can access');
//     } catch {
//         console.error('cannot access');
//     }
// }
//
// acc().then() // can access


/*
* fsPromises.appendFile(path, data[, options])
* path <string> | <Buffer> | <URL> | <FileHandle> filename or <FileHandle>
* data <string> | <Buffer>
* options <Object> | <string>
* encoding <string> | <null> Default: 'utf8'
* mode <integer> Default: 0o666
* flag <string> See support of file system flags. Default: 'a'.
* Returns: <Promise> При успехе выполняется с undefined
* */
// const {appendFile} = require('fs/promises');
//
// async function app() {
//     try{
//         await appendFile('./index.txt', 'WOW')
//     }catch (err) {
//         throw new Error(err.message)
//     }
// }
// app().then()


/*
* fsPromises.chmod(path, mode)
* path <string> | <Buffer> | <URL>
* mode <string> | <integer>
* Returns: <Promise> При успехе выполняется с undefined
* Изменяет права доступа к файлу.
* */


/*
* fsPromises.chown(path, uid, gid)
* path <string> | <Buffer> | <URL>
* uid <integer>
* gid <integer>
* Returns: <Promise> При успехе выполняется с undefined
* Меняет владельца файла.
* */


/*
* fsPromises.copyFile(src, dest[, mode])
* src <string> | <Buffer> | <URL> из какого файла копировать.
* dest <string> | <Buffer> | <URL> в какой файл копировать.
* Асинхронное копирование из одного файла в другой.
* */
// const {copyFile} = require('fs/promises');
//
// async function copy() {
//     try {
//         await copyFile('./index.txt', './index1.txt');
//     } catch (err) {
//         throw new Error(err.message);
//     }
// }
// copy().then();


/*
* fsPromises.lchown(path, uid, gid)
* Меняет владельца символьной ссылки.
* */


/*
* fsPromises.lutimes(path, atime, mtime)
* изменяет время доступа и модификации файла
* */


/*
* fsPromises.link(existingPath, newPath)
* перемещает файл в другое место.
* */
// const {link} = require('fs/promises');
//
// link('./index.txt', '../index.txt')
//     .then(() => console.log('linked successful'))
//     .catch(() => console.log('failed'))


/*
* fsPromises.lstat(path[, options])
* alias fsPromises.stats()
* */


/*
* fsPromises.mkdir(path[, options])
* Асинхронно создаёт директорию.
* */
// const {mkdir} = require('fs/promises');
//
// async function mk() {
//     try {
//         await mkdir(`${__dirname}/test`)
//     } catch (err) {
//         throw new Error('failed');
//     }
// }
// mk().then()


/*
* fsPromises.mkdtemp(prefix[, options])
* prefix <string>
* */
// const {mkdtemp} = require('fs/promises');
// const path = require('path');
//
// async function mkd() {
//     try {
//         await mkdtemp(path.join(__dirname, 'test-'))
//     } catch (err) {
//         throw new Error(err.message)
//     }
// }
//
// mkd().then()


/*
* fsPromises.open(path, flags[, mode])
*
* */
// const {open} = require('fs/promises');
//
//
// async function op() {
//     try {
//         const fileContent = await open('./index.txt', 'r');
//         console.log(fileContent)
//     } catch (err) {
//         throw new Error(err.message)
//     }
// }
//
// op().then()
//
// FileHandle {
//     _events: [Object: null prototype] {},
//     _eventsCount: 0,
//         _maxListeners: undefined,
//         close: [Function: close],
//     [Symbol(kCapture)]: false,
//         [Symbol(kHandle)]: FileHandle {},
//     [Symbol(kFd)]: 3,
//         [Symbol(kRefs)]: 1,
//         [Symbol(kClosePromise)]: null
// }


/*
* fsPromises.opendir(path[, options])
* Асинхронно получает все файлы в текущей директории.
* */
// const {opendir} = require('fs/promises');
//
// async function opend() {
//     try {
//         const dir = await opendir('./');
//         for await (const file of dir)
//             console.log(file);
//     } catch (err) {
//         console.log(err.message);
//     }
// }
//
// opend().then()
//
// Dirent { name: 'fffdqAgpa', [Symbol(type)]: 2 }
// Dirent { name: 'fffLAs8FA', [Symbol(type)]: 2 }
// Dirent { name: 'index.js', [Symbol(type)]: 1 }
// Dirent { name: 'index.txt', [Symbol(type)]: 1 }
// Dirent { name: 'index1.txt', [Symbol(type)]: 1 }


/*
* fsPromises.readdir(path[, options])
* Асинхронно отображает название всех файлов в директории.
* */
// const {readdir} = require('fs/promises');
//
// async function redd() {
//     try {
//         const files = await readdir('./')
//         for await (const file of files)
//             console.log(file)
//     } catch (err) {
//         console.log(err.message)
//     }
// }
// redd().then()
// fffdqAgpa
// fffLAs8FA
// index.js
// index.txt
// index1.txt


/*
* fsPromises.readFile(path[, options])
* Асинхронно читает содержимое файла.
* */
// const {readFile} = require('fs/promises');
//
// async function readF() {
//     try {
//         const controller = new AbortController();
//         const signal = controller.signal;
//         readFile('./index.txt', {signal});
//
//         controller.abort();
//     } catch (err) {
//         console.log(err.message);
//     }
// }
// readF().then();
// node:internal/fs/promises:272
// throw new AbortError();


/*
* fsPromises.readlink(path[, options])
*
* */


/*
* fsPromises.realpath(path[, options])
* Асинхронно изменяет путь к файлу.
* */
// const {realpath} = require('fs/promises');
// const path = require('path');
//
// async function realp() {
//     try {
//         const newPath = path.join(__dirname, 'fffLAs8FA');
//         realpath(newPath, (err, resolvedPath) => {
//             console.log(resolvedPath)
//         })
//
//     } catch (err) {
//         console.log(err.message)
//     }
// }
//
// realp().then()


/*
* fsPromises.rename(oldPath, newPath)
* Изменяет oldPath на newPath
* */


/*
* fsPromises.rmdir(path[, options])
* Асинхронно удаляет каталог по пути
* */
// const fs = require('fs');
// const fsPromises = fs.promises;
//
// async function rmd() {
//     try {
//         await fsPromises.rmdir('./fffLAs8FA');
//     } catch (err) {
//         console.log(err.message);
//     }
// }
// rmd().then()


/*
* fsPromises.rm(path[, options])
*  Асинхронно удаляет папки и файлы по пути.
* TODO: не до конца разобрался.
* */
// const fs = require('fs');
// const fsPromises = fs.promises;
// const path = require('path');
// async function r() {
//     try {
//         await fsPromises.rm(path.join(__dirname, 'fffdqAgpa'), { force: true, });
//     } catch (err) {
//         console.log(err.message);
//     }
// }
// r().then()


/*
* fsPromises.stat(path[, options])
* показывает информацию по файлу
* */
// const fs = require('fs');
// const fsPromises = fs.promises;
// async function st() {
//     try{
//         const statFile = await fsPromises.stat('./index.txt');
//         console.log(statFile);
//     }catch (err) {
//         console.log(err);
//     }
// }
// st().then()
// Stats {
//     dev: 1646531570,
//         mode: 33206,
//         nlink: 1,
//         uid: 0,
//         gid: 0,
//         rdev: 0,
//         blksize: 4096,
//         ino: 293859875685936300,
//         size: 12,
//         blocks: 0,
//         atimeMs: 1617307680927.7437,
//         mtimeMs: 1617306902169.867,
//         ctimeMs: 1617307683663.3728,
//         birthtimeMs: 1617301925805.29,
//         atime: 2021-04-01T20:08:00.928Z,
//         mtime: 2021-04-01T19:55:02.170Z,
//         ctime: 2021-04-01T20:08:03.663Z,
//         birthtime: 2021-04-01T18:32:05.805Z
// }


/*
* fsPromises.symlink(target, path[, type])
* создаёт ссылку на файл
* TODO: Не нашёл примеров, вернуться.
* */


/*
* fsPromises.truncate(path[, len])
* удаляет содержимое в файле.
* */
// const fs = require('fs');
// const fsPromises = fs.promises;
//
// async function tr() {
//     try {
//         await fsPromises.truncate('./index1.txt');
//     } catch (err) {
//         console.log(err.message);
//     }
// }
// tr().then()


/*
* fsPromises.unlink(path)
* Удаляет файл по пути.
* */
// async function unl() {
//     try {
//         await fsPromises.unlink('./index1.txt');
//     } catch (err) {
//         console.log(err)
//     }
// }
// unl().then()


/*
* fsPromises.utimes(path, atime, mtime)
* Изменяет временные метки у файла atime, mtime
* */


/*
* fsPromises.watch(filename[, options])
* отслеживает изменение файлов.
* */
// const ac = new AbortController();
// const { signal } = ac;
// setTimeout(() => ac.abort(), 10000);
//
// (async () => {
//     try {
//         const watcher = await fsPromises.watch(__filename, { signal });
//         for await (const event of watcher)
//             console.log(event);
//     } catch (err) {
//         if (err.name === 'AbortError')
//             return;
//         throw err;
//     }
// })();


/*
* fsPromises.writeFile(file, data[, options])
* Асинхронно записывает данные в файле, заменяя его содержимое.
* data: String, buffer, Object.toString()
* */
// (async () => {
//    try{
//        await fsPromises.writeFile('./index.txt', 'HELLO')
//    }catch (err) {
//        console.log(err)
//    }
// })()
