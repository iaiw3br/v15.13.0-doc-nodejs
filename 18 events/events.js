const {EventEmitter, errorMonitor} = require('events');
const util = require('util');

/*
* События.
* Большая часть API ядра node.js построена на идиоматической асинхронной архитектуре, управляемой событиями.
* Есть действия вызывающие событие и есть слушатели.
* События являются EventEmitter класса.
* */
class MyEmitter extends EventEmitter {
}

const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//     console.log('an event occurred!');
// });
// myEmitter.emit('event');

// myEmitter.on('event', function (a, b) {
//     console.log('a', a);
//     console.log('b', b);
//     console.log('this', this);
//     console.log('this === myEmitter', this === myEmitter);
// });
// myEmitter.emit('event', 'a', 'b');

// События вызываются синхронно. Но можно переключиться и на асинхронный способ, используя setImmediate()
// или process.nextTick() методы
// myEmitter.on('event', () => {
//     setImmediate(() => {
//         console.log('this async')
//     });
// });
// myEmitter.emit('event')


// let count = 0;
// myEmitter.on('event', () => {
//     count++;
//     console.log('count:', count); // 1, 2, 3, 4
// });
//
// myEmitter.emit('event');
// myEmitter.emit('event');
// myEmitter.emit('event');
// myEmitter.emit('event');


// Можно использовать событие, когда вызовется один раз
// myEmitter.once('event', () => {
//     console.log('hi') // hi
// });
// myEmitter.emit('event')
// myEmitter.emit('event') // ignored


// Если будет вызываться событие, у которого нет слушателя, то возникнет ошибка и node.js завершит процесс.
// myEmitter.emit('err', new Error('whops'))


// Защита от подобного - использовать domain, но он уже устарел, поэтому лучшей практикой является
// обрабатывать ошибки
// myEmitter.on('error', (err) => {
//     console.error('whoops, it is error', err.message); // whoops, it is error bad news
// });
// myEmitter.emit('error', new Error('bad news'));


// Обрабатывать ошибки, можно с помощью events.errorMonitor
// myEmitter.on(errorMonitor, (err) => {
//     MyMonitoringTool.log(err);
// });
// myEmitter.emit('error', new Error('whoops!'));


// Event: 'newListener'
// Событие newListener срабатывает, когда добавляется новый слушатель.
// myEmitter.once('newListener', (event) => {
//     console.log('how?')
//     if (event === 'event') {
//         myEmitter.on('event', () => console.log('B'));
//     }
// });
// myEmitter.on('event', () => {
//     console.log('A')
// });
// myEmitter.emit('event');
// myEmitter.emit('newListener')
// result: how? B A


//Event: 'removeListener'
// function listener (text) {
//     console.log(text);
// }
// myEmitter.on('message', listener);
// setInterval(() => {
//     myEmitter.emit('message', Date.now());
// }, 300);
// setTimeout(() => {
//     myEmitter.removeListener('message', listener);
// }, 3000);


/*
* emitter.addListener(eventName, listener)
* alias emitter.on(eventName, listener);
* */


/*
* emitter.emit(eventName[, ...args])
* Синхронный вызов каждого слушателя зарегистрированного для имения события в том порядке, как они
* были зарегистрированы, передавая в каждый аргументы.
* */
// myEmitter.on('event', () => console.log('first without arguments'));
// myEmitter.on('event', (arg1, arg2) => console.log(`arg1: ${arg1}, arg2: ${arg2}`));
// myEmitter.on('event', (...args) => {
//     const arguments = args.join(', ');
//     console.log('all arguments', arguments);
// });
// myEmitter.emit('event', 1,2,3,4,5,6,7,9);


/*
* emitter.eventNames()
* Массив всех слушателей событий.
* */
// myEmitter.on('event1', () => {});
// myEmitter.on('event2', () => {});
// const sym = Symbol('symbol');
// myEmitter.on(sym, () => {});
// console.log(myEmitter.eventNames());


/*
* emitter.getMaxListeners()
* Возвращает максимальное число слушателей, которое установлено
* emitter.setMaxListeners(n) либо по умолчанию events.defaultMaxListeners.
* */
// console.log(myEmitter.getMaxListeners()) // 10


/*
* emitter.listenerCount(eventName)
* Возвращает количество прослушиваемых событий по имени события.
* */
// myEmitter.on('event', () => {});
// myEmitter.on('event', () => {});
// myEmitter.on('event', () => {});
// myEmitter.on('event', () => {});
// myEmitter.on('event', () => {});
// myEmitter.on('event', () => {});
// console.log(myEmitter.listenerCount('event')); // 6


/*
* emitter.listeners(eventName)
* Массив со слушателями по имени события.
* */
// myEmitter.on('event', () => console.log('someone connected'));
// console.log(util.inspect(myEmitter.listeners('event'))); // [ [Function (anonymous)] ]


/*
* emitter.off(eventName, listener)
* alias emitter.removeListener();
* */
// function listener (text) {
//     console.log(text);
// }
// myEmitter.on('message', listener);
// setInterval(() => {
//     myEmitter.emit('message', Date.now());
// }, 300);
// setTimeout(() => {
//     myEmitter.off('message', listener);
// }, 3000);

/*
* emitter.on(eventName, listener)
* добавляет слушателя в конец массив слушателей для события с именем eventName. Никаких проверок на то, что был ли
* уже добавлен ранее слушатель, не производится. Если будет несколько слушателей, то вызовутся они все.
* */
// myEmitter.on('event', () => console.log('1'))
// myEmitter.on('event', () => console.log('2'))
// myEmitter.on('event', () => console.log('3'))
// myEmitter.on('event', () => console.log('4'))
// myEmitter.emit('event');


/*
* emitter.once(eventName, listener)
* Слушатель срабатывает один раз.
* */
// myEmitter.once('event', () => console.log('event'));
// myEmitter.emit('event');
// myEmitter.emit('event');


/*
* emitter.prependListener(eventName, listener)
* Добавляем слушатель вначале массива слушателей.
* */
// myEmitter.once('event', () => console.log('once'));
// myEmitter.prependListener('event', () => console.log('prependListener'));
// myEmitter.emit('event');


/*
* emitter.prependOnceListener(eventName, listener)
* Добавляет вначале и сработает один раз
* */
// myEmitter.prependListener('event', () => console.log('prependListener'));
// myEmitter.prependOnceListener('event', () => console.log('prependOnceListener'));
// myEmitter.emit('event');
// myEmitter.emit('event');


/*
* emitter.removeAllListeners([eventName])
* Удаляет всех слушателей по массиву имён.
* */


/*
* emitter.removeListener(eventName, listener)
* Удаляет слушателя по имени.
* */


/*
* emitter.setMaxListeners(n)
* устанавливает максимальное кол-во слушателей.
* */


/*
* emitter.rawListeners(eventName)
* Получаем копию слушателя, который можем использовать далее.
* */
// myEmitter.once('log', () => console.log('once log'));
// const listeners = myEmitter.rawListeners('log');
// const logFnWrapper = listeners[0];
// logFnWrapper.listener();
// logFnWrapper();
// myEmitter.on('log', () => console.log('on log'));
//
// const newListeners = myEmitter.rawListeners('log');
// newListeners[0]();
// myEmitter.emit('log');


/*
* events.getEventListeners(emitterOrTarget, eventName)
* todo: не получается запустить метод.
* */


/*
* process.nextTick() ожидание нескольких событий.
* Микро очередь для коллбэков.
* */

