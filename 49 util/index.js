const util = require('util');


/*
* util.callbackify(original)
* берёт async функцию и возвращает callback
* */
// async function fn() {
//     return 'hello world';
// }
// const callbackFunction = util.callbackify(fn);
//
// callbackFunction((err, ret) => {
//     if (err) throw err;
//     console.log(ret);
// });


/*
* util.debuglog(section[, callback])
*
* */
// const debugLog = util.debuglog('some');
// debugLog(`hi from [%d]`, 123) // FOO-BAR 3257: hi from [123]


/*
* debuglog().enabled
* util.debug(section)
* Используется для логирования данных
* */
// const enabled = util.debuglog('foo').enabled;
// if (enabled) {
//     console.log('hello from foo [%d]', 123);
// }


/*
* util.deprecate(fn, msg[, code])
* Используется предупреждение, если будет использована эта функция.
* */

// function showMessage() {
//     console.log('Hi');
// }
// const carefulMessage = 'deprecate function, be careful!'
// const fn1 = util.deprecate(showMessage, carefulMessage, 'DEP0001');
// fn1();


/*
* util.format(format[, ...args])
* Возвращает отформатированную строку используя первый аргумент как формат
* */
// util.format('%s:%s', 'foo');
// Returns: 'foo:%s'


/*
* util.formatWithOptions(inspectOptions, format[, ...args])
* аналог util.format(), за исключением того, что в inspectOptions находятся параметры, передаваемые в util.inspect().
* */


/*
* util.getSystemErrorName(err)
* Возвращает имя строки для числового кода ошибки, которая поступает из Node.js API.
* */


/*
* util.inherits(constructor, superConstructor)
* Использовать не рекомендуется.
* */


/*
* util.inspect(object[, showHidden[, depth[, colors]]])
* Возвращает строковое представление объекта для отладки.
* */


/*
* util.isDeepStrictEqual(val1, val2)
* Возвращает true если глубина равна между val1 и val2
* */


/*
* util.promisify(original)
* Превращает функцию callback в Promise
* */


/*
* util.types.isAnyArrayBuffer(value)
* Возвращает true, если значение ArrayBuffer, SharedArrayBuffer
* */


/*
* util.types.isArrayBufferView(value)
* Возвращает true, если значение int8Array, buffer.from(), DataView(new ArrayBuffer()), ArrayBuffer
* */


/*
* util.types.isArgumentsObject(value)
* Возвращает true, если значение является аргументом объекта.
* */


/*
* util.types.isArrayBuffer(value)
* Возвращает true, если ArrayBuffer
* */


/*
* util.types.isAsyncFunction(value)
* Возвращает, если функция является асинхронной
* */


/*
* util.types.isBooleanObject(value)
* Возвращает true, если boolean является объектом new Boolean(false/true)
* */
// util.types.isBooleanObject(false);  // Returns false
// util.types.isBooleanObject(true);   // Returns false
// util.types.isBooleanObject(new Boolean(false)); // Returns true
// util.types.isBooleanObject(new Boolean(true));  // Returns true
// util.types.isBooleanObject(Boolean(false)); // Returns false
// util.types.isBooleanObject(Boolean(true));  // Returns false

/*
* util.types.isBoxedPrimitive(value)
* Возвращает true, если является примитивным объектом в коробке new Boolean(). new String(), Object(Symbol())
* */
// util.types.isBoxedPrimitive(false); // Returns false
// util.types.isBoxedPrimitive(new Boolean(false)); // Returns true
// util.types.isBoxedPrimitive(Symbol('foo')); // Returns false
// util.types.isBoxedPrimitive(Object(Symbol('foo'))); // Returns true
// util.types.isBoxedPrimitive(Object(BigInt(5))); // Returns true


/*
* util.types.isDate(value)
* Возвращает true если значение является датой
* */
// util.types.isDate(new Date());  // Returns true


/*
* util.types.isExternal(value)
* Возвращает true если значение является собственным внешним значением (из c++)
* */


/*
* util.types.isGeneratorFunction(value)
* Возвращает true если функция генератор
* */


/*
* util.types.isGeneratorObject(value)
* Возвращает true если значение является объектом-генератором, возвращенным встроенной функцией-генератором.
* */
// function* foo() {}
// const generator = foo();
// util.types.isGeneratorObject(generator);  // Returns true


/*
* util.types.isMap(value)
* Возвращает true если значение new Map()
* */


/*
* util.types.isMapIterator(value)
* Возвращает true если значение является итератором для new Map()
* */
// const map = new Map();
// util.types.isMapIterator(map.keys());  // Returns true
// util.types.isMapIterator(map.values());  // Returns true
// util.types.isMapIterator(map.entries());  // Returns true
// util.types.isMapIterator(map[Symbol.iterator]());  // Returns true


/*
* util.types.isModuleNamespaceObject(value)
* Возвращает true если значение является модулем пространственного объекта
* */
// import * as ns from './a.js';
// util.types.isModuleNamespaceObject(ns);  // Returns true


/*
* util.types.isNativeError(value)
* Возвращает true если это объекта ошибка
* */
// util.types.isNativeError(new Error());  // Returns true
// util.types.isNativeError(new TypeError());  // Returns true
// util.types.isNativeError(new RangeError());  // Returns true


/*
* util.types.isNumberObject(value)
* Возвращает true если это число-объект
* */
// util.types.isNumberObject(0);  // Returns false
// util.types.isNumberObject(new Number(0));   // Returns true


/*
* util.types.isPromise(value)
* Возвращает true если это promise
* */
// util.types.isPromise(Promise.resolve(42));  // Returns true


/*
* util.types.isProxy(value)
* Возвращает true если это экземпляр прокси
* */
// const target = {};
// const proxy = new Proxy(target, {});
// util.types.isProxy(target);  // Returns false
// util.types.isProxy(proxy);  // Returns true


/*
* util.types.isRegExp(value)
* Возвращает true если это регулярное выражение
* */
// util.types.isRegExp(/abc/);  // Returns true
// util.types.isRegExp(new RegExp('abc'));  // Returns true


/*
* util.types.isSet(value)
* Возвращает true если это new Set()
* */


/*
* util.types.isSetIterator(value)
* Возвращает true если это итератор объекта new Set()
* */
// const set = new Set();
// util.types.isSetIterator(set.keys());  // Returns true
// util.types.isSetIterator(set.values());  // Returns true
// util.types.isSetIterator(set.entries());  // Returns true
// util.types.isSetIterator(set[Symbol.iterator]());  // Returns true


/*
* util.types.isSharedArrayBuffer(value)
* Возвращает true если это объект SharedArrayBuffer
* */
// util.types.isSharedArrayBuffer(new ArrayBuffer());  // Returns false
// util.types.isSharedArrayBuffer(new SharedArrayBuffer());  // Returns true


/*
* util.types.isStringObject(value)
* Возвращает true если это объект-строка new String()
* */
// util.types.isStringObject('foo');  // Returns false
// util.types.isStringObject(new String('foo'));   // Returns true


/*
* util.types.isSymbolObject(value)
* Возвращает true если это символ
* */
// const symbol = Symbol('foo');
// util.types.isSymbolObject(symbol);  // Returns false
// util.types.isSymbolObject(Object(symbol));   // Returns true


/*
* util.types.isTypedArray(value)
* Возвращает true если это TypedArray
* */
// util.types.isTypedArray(new ArrayBuffer());  // Returns false
// util.types.isTypedArray(new Uint8Array());  // Returns true
// util.types.isTypedArray(new Float64Array());  // Returns true
