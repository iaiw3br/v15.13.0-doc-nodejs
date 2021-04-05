/*
* Console модуль предоставляет простую консоль отладки для веб браузеров.
* Модуль экспортирует два специфических компонента:
* 1. console с методами console.log(), console.error(), console.warn() можно использовать в Node.js потоках.
* 2. глобальная console для записи process.stdout, process.stderr. Использовать без require()
* */
// console.log('hi');
// console.error(new Error('Whoops'))
// console.warn('Wow')


/*
* new Console(stdout[, stderr][, ignoreErrors])
* new Console(options)
* создаёт новую console с одним или двумя потоками записи.
* stdout - для записи логов или информации output.
* stderr - для предупреждений или ошибок.
* Если stderr не используется, то в stdout помещается вся информация.
* */
const fs = require('fs');
const {Console} = require('console');

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({stdout: output, stderr: errorOutput});
// const count = 5;
// logger.log('count: %d', count)
// logger.warn('wow')
// logger.error('fuck')

/*
* console.assert(value[, ...message])
* если value = false, то вывести сообщение об ошибке.
* если value = true, то ничего не произойдёт.
* */
// console.assert(false, 'error') // Assertion failed: error

/*
* console.clear()
* windows, linux - очищает информацию в терминале
* */


/*
* console.count([label])
* ярлык для счётчика
* можно использовать, чтобы определить, сколько раз вызвалась функция, к примеру.
* */
// console.count() // default: 1
// console.count('default') // default: 2
// console.count('abc') // abc: 1


/*
* console.countReset([label])
* сбрасывает счётчик для console.count()
* */
// console.count('abc') // abc: 1
// console.count('abc') // abc: 2
// console.countReset('abc')
// console.count('abc') // abc: 1


/*
* console.debug(data[, ...args])
* тоже самое, что и console.log()
* */
// console.debug('hello') // hello


/*
* console.dir(obj[, options])
* используется для util.inspect() для отображение информации сложных объектов.
* // TODO: тоже самое, что и console.log() не нашёл примера.
* */
// console.dir({name: 'Selena', age: 40})


/*
* console.dirxml(...data)
* вызывает console.log() и никак не форматирует xml
* */
// console.dirxml(fs.readFileSync('./data.xml')) // <Buffer ....>


/*
* console.error([data][, ...args])
* записывает данные в stderr с новой линии.
* */
// const code = 5;
// logger.error('error #%d', code) // более красный цвет
// logger.error('error', code) // цвет похож на tomato


/*
* console.group([...label])
* console.groupCollapsed()
* Создаёт новую группу сообщений в консоли. Дополнительный уровень отступа в консоли.
* */
// console.log('HELLO')
// console.group('Level 2')
// console.log('HELLO')
// console.group('Level 3')
// console.log('HELLO')


/*
* console.groupEnd()
* Сбрасывает 1 группу сообщений в консоли
* */
// console.log('HELLO')
// console.group('Level 2')
// console.log('HELLO')
// console.groupEnd()
// console.group('Level 3')
// console.log('HELLO')


/*
* console.log([data][, ...args])
* Добавляет в stdout информацию с новой линии.
* */


/*
* console.table(tabularData[, properties])
* создаёт таблицу в терминале
* */
// console.table([{name: 'Ivan', age: 30}, {name: 'Boris', age: 12}])
// ┌─────────┬─────────┬─────┐
// │ (index) │  name   │ age │
// ├─────────┼─────────┼─────┤
// │    0    │ 'Ivan'  │ 30  │
// │    1    │ 'Boris' │ 12  │
// └─────────┴─────────┴─────┘


/*
* console.time([label])
* стартует таймер
*
* console.timeEnd([label])
* останавливаем таймер
* */

// console.time('10000-elements')
// for(let i = 0; i < 10000; i++) {}
// console.timeEnd('10000-elements') // 10000-elements: 0.226ms


/*
* console.timeLog([label][, ...data])
* таймер который выводит предыдущий вызов console.time()
* */

// console.time('get-info');
// setTimeout(() => {
//     console.timeLog('get-info', 10); // get-info: 5005.297ms 10
//     console.timeEnd('get-info') // get-info: 5011.790ms
// }, 5000);

/*
* console.trace([message][, ...args])
* выводит сообщение в strerr
* */
// logger.trace('Wow')
// Trace: Wow
//     at Object.<anonymous> (C:\projects\doc-nodejs\10 console\index.js:167:8)
//     at Module._compile (internal/modules/cjs/loader.js:999:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
//     at Module.load (internal/modules/cjs/loader.js:863:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:708:14)
//     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
//     at internal/main/run_main_module.js:17:47


/*
* console.warn([data][, ...args])
* тоже самое, что и console.error()
* */
