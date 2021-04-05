/*
* Приложение node.js будет иметь дело с 4 видами ошибок:
* 1. Стандартные JavaScript ошибки:
* EvalError - указывает на глобальную функцию eval(). Ошибка уже не генерируется JavaScript.
* SyntaxError - запуск заведомо не корректного кода (отсутствие скобок, кавычек и т.п.)
* RangeError - когда значение не входит в множество или выходит за диапазон допустимых значений.
* ReferenceError - ошибка возникает, когда у несуществующей переменно вызвать метод (good.toString())
* TypeError - ошибка, когда не тот тип переменной, что ожидает (вызвать функцию из строки).
* URIError - декодирование или кодирование URI не было успешным.
* 2. Системные ошибки вызванные ограничениями базовой операционной системы, открыть не существующий файл,
* попытка отправить данные через закрытый сокет.
* 3. Пользовательские ошибки, вызванные в коде.
* 4. AssertionError - ошибки, вызванные с помощью assert().
* */
const fs = require('fs');
const path = require('path');

// Распространение ошибок и перехват.
/*
* Node.js поддерживает несколько механизмов распространения и обработки ошибок. То как ошибки вызываются, полностью
* зависит от типа ошибки и стиля вызываемого API.
* Все JavaScript ошибки обрабатываются как исключения, которые генерируют ошибку с помощью стандартного механизма.
* */

try {
} catch (err) {
}

/*
* Асинхронные ошибки можно обрабатывать следующими способами.
* */

/*
* 1. Большинство асинхронных методов, которые принимают callback буду принимать Error объект первым аргументом.
* Если первый аргумент != null и это Error, тогда ошибку необходимо обработать.
* */
// const fs = require('fs');
// fs.readFile('not exists file', (err, data) => {
//     if (err) {
//         console.error('There was an error reading the file!', err)
//         return;
//     }
//     console.log('file successful reading! :)')
// })


/*
* 2. Когда асинхронный метод вызван в объекте который EventEmitter, ошибки могут быть перенаправлены событие 'error'
* */
// const net = require('net');
// const connection = net.connect('localhost');
//
// connection.on('error', error => {
//     console.error(error);
// })
// connection.pipe(process.stdout)


/*
* 3. Небольшое количество асинхронных методов в Node.js API могут использоваться throw механизмом вызывающие исключения,
* которые должны быть вызваны, использую try catch. Списка таких методов нет. Для каждого метода надо смотреть доку.
* */


/*
* Использование 'error' механизма распространено для stream-based, event emitter-based API's, которые сами по себе
* представляют собой серию асинхронных операции.
* Для всех EventEmitter объектов, если 'error' событие не предоставлен, то ошибка будет вызвана ошибка, в результате
* node.js сообщит о не перехваченном исключении и завершится сбоем, если только модуль домена не используется
* надлежащим образом или обработчик не был зарегистрирован для события 'uncaughtException'
* */
// const EventEmitter = require('events');
// const ee = new EventEmitter();
//
// setImmediate(() => {
//     ee.emit('error', new Error('This will crash'));
// })
/*
* такие ошибки не могут быть перехвачены с помощью try..catch потому что код уже выполнился.
* */


/*
* Обратные вызовы при первой ошибке.
* Большинство  асинхронных методов вызываются node.js следуют идиоматическому шаблону, называемому обратным
* вызовом при первой ошибке. С этим паттерном обратный вызов функции передаётся методу в качестве аргумента.
* Когда операция завершается или вызывается ошибка, функция обратного вызова вызывается с объектом Error передаваемая
* первым аргументом если есть, если нет ошибки нет, то первый аргумент будет null.
* */

// errorFirstCallback = (err, data) => {
//     if (err) {
//         console.error('There was an error', err);
//         return;
//     }
//     console.log(data);
// }
// fs.readFile(path.resolve(__dirname, 'notexistsfile.txt'), errorFirstCallback);
// fs.readFile(path.resolve(__dirname, 'test.txt'), errorFirstCallback)


// class Error

/*
*new Error(message)
* создаёт новый Error объект а устанавливает error.message свойство для передачи текстового сообщения. Если
* объект передаётся в сообщений, то вызывается message.toString().
* */


/*
* Error.captureStackTrace(targetObject[, constructorOpt])
* Создаёт .stack свойство в targetObject, который при успешном допуске, возвращает строку, которая содержит в себе
* место, где вызывается Error.captureStackTrace()
* */


/*
* Error.stackTraceLimit
* стандартно показывается 8 строк ошибок, с помощью этого можно увеличить кол-во ошибок
* */
// Error.stackTraceLimit = Infinity;

// function a() { dieInHell(); }
// function b() { a(); }
// function c() { b(); }
// function d() { c(); }
// function e() { d(); }
// function f() { e(); }
// function g() { f(); }
// function h() { g(); }
// function i() { h(); }
// function j() { i(); }
// function k() { j(); }
// function l() { k(); }
// function m() { l(); }
// function n() { m(); }
// function o() { n(); }
// function p() { o(); }
// function q() { p(); }
//
// try {
//     q();
// }
// catch(e) {
//     console.log(e.stack);
// }


/*
* error.code
* строковая метка, обозначающая тип ошибки.
* //см. Class: AssertionError
* err.code = undefined
* */


/*
* error.message
* текстовое сообщение об ошибке
* */
const err = new Error('Wow');
// console.log(err.message) // Wow


/*
* error.stack
* строка, где была вызвана ошибка
*
* */
// console.log(err.stack)
// at Object.<anonymous> (C:\projects\doc-nodejs\17 errors\index.js:163:13)
// class                       message
// каждая линия начинает с at


/*
* Class: AssertionError
* Указывает на неудачу утверждения.
* */
// const assert = require('assert')
// const { message } = new assert.AssertionError({
//     actual: 1,
//     expected: 2,
//     operator: 'strictEqual'
// });
//
// try {
//     assert.strictEqual(1, 2);
// } catch (err) {
//     console.log(err instanceof assert.AssertionError)
//     console.log(err.message, message);
//     console.log(err.name, 'AssertionError');
//     console.log(err.actual, 1);
//     console.log(err.expected, 2);
//     console.log(err.code, 'ERR_ASSERTION');
//     console.log(err.operator, 'strictEqual');
//     console.log(err.generatedMessage, true);
// }


// Class: SystemError
/*
* Nodejs генерирует системные ошибки, когда в системе возникают исключения. Это обычно выполняется, когда
* приложение нарушает ограничения операционной системы. Например, система вызовет ошибку, если приложение
* попробует прочитать файл, которого нет.
*
* error.address - если присутствует адрес, к которому не удалось подключиться к сети.
* error.code - строковое представление ошибки кода.
* error.dest - если присутствует, то место назначения пути к файлу, при сообщений об ошибке файловой системы.
* error.errno - системно-предоставленный номер ошибки.
* error.info - если присутствует, дополнительные сведения о состоянии ошибки.
* error.message - системно-предоставленные человеко-читаемое описание ошибки.
* error.path - если присутствует, путь к файлу, когда возникает сообщение об ошибке.
* error.port - если присутствует, подключение к порту, который не доступен.
* error.syscall - имя системного вызова, из-за которого возникает ошибка.
* */


/*
* Common system errors (Общие системные ошибки).
* EACCES - отказано в доступе, была сделана попытка получить доступ к файлу, у которого доступа нет.
* EADDRINUSE - адрес уже используется, попытка привязать сервер (net, http, https) к локального адресу, который уже
* используется.
* ECONNREFUSED - в соединении отказано. Обычно из-за попытки подключиться к неактивной службе на чужом хосте.
* ECONNRESET - сброс соединения. Соединение было принудительно закрыто. Это обычно происходит из-за потери
* соединения с удаленным сокетом из-за тайм-аута или перезагрузки.
* EEXIST - существующий файл был целью операции, которая требовала, чтобы цель не существовала.
* EISDIR - операция ожидает файл, но указанный путь был каталогом.
* EMFILE - слишком много открытых файлов в системе.
* ENOENT - нет файла или каталога
// fs.readFileSync(path.resolve(__dirname, 'bad')) // Error: ENOENT: no such file or directory, open 'C:\projects\doc-nodejs\17 errors\bad'
* ENOTDIR - не существует каталог
* ENOTEMPTY - каталог не пустой.
* ENOTFOUND - ошибка поиска DNS.
* EPERM - операция не разрешена. Операция требующая больше прав.
* EPIPE - сломанная pipe. Запись в каналог, сокет или FIFO для которых нет процесса для чтения данных.
* ETIMEDOUT - превышено время ожидания.
* */


// Class: TypeError
// указывает, что аргумент не является допустимым типом
// require('url').parse(() => { });


/*
* Exceptions vs. errors
* Исключение - значение, которое выбрасывается в результате недопустимой операции или как цель оператора throw
* */
