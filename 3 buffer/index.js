const {show} = require('../helper')
/*
* Буфер - API node.js которая позволяет работать с потоками двоичных данных
* класс является глобальным, поэтому не нужно использовать require('buffer')
* двоичные представление это представление числа/строки в формате 0 и 1
* к примеру, 'L'.charCodeAt(0) = 76 => 01001100
*
* поток это последовательность данных, перемещаемых из одного места в другое.
*
* т.е. буфер это то место ожидания, пока данные накопятся в достаточном кол-ве, чтобы отправиться дальше.
* вокзал, автобус люди.
* Вокзал = node.js
* Автобус = buffer
* люди = двоичные данные
* */

// создаёт пустой буфер размером 10, буфер может вместить только 10 байт.
// 1 байт = 8 битов, восемь единиц и нулей.
const buf1 = Buffer.alloc(10); // <Buffer 00x10>
// console.log(buf1)

// создаёт буфер, в котором 10 цифр по 1
const buf2 = Buffer.alloc(10, 1) // <Buffer 01x10>
// console.log(buf2)

/*
Создаёт буфер с предварительно заполненными данными или старыми буферами, работает быстрее, чем alloc
но не является безопасным, т.к. может содержать конфиденциальные данные. Если используете этот метод, то
не забудьте очистить содержимое с помощью buf.fill(0)
Выдаст ошибку, если размер не будет числом.
*/
const buf3 = Buffer.allocUnsafe(10)
// console.log(buf3)

// создаёт буфер с неким содержимым
const buf4 = Buffer.from([1, 2, 3]); // <Buffer 01 02 03>
// console.log(buf4)

// TODO: не понятно, почему 01
const buf5 = Buffer.from([257, 257.5, -255, '1']); // <Buffer 01 01 01 01>
// console.log(buf5)

const buf6 = Buffer.from('tést') // <Buffer 74 c3 a9 73 74>
// console.log(buf6)

// Создаёт буфер, содержащий Latin-1 байты
const buf7 = Buffer.from('tést', 'latin1'); // <Buffer 74 c3 a9 73 74>
// console.log(buf7)


/*
Буфер и кодировка символов
при конвертировании из строки в буфер, можно указать кодировку.
Дефолтное значение UTF-8
*/

const buf8 = Buffer.from('hello world', 'utf-8'); // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
// console.log(buf8.toString('hex')) //68656c6c6f20776f726c64

// console.log(Buffer.from('hi', 'utf8')); // <Buffer 68 69>
// console.log(Buffer.from('hi', 'utf16le')); // <Buffer 68 00 69 00>

/*
* В настоящее время Node.js поддерживает следующие кодировки символов
* 1. 'utf8' много байтовые символы unicode, дефолтная кодировка для веб страниц и разных документов.
* если какой-то символ невозможно кодировать, то получим ошибку - �
* 2. 'utf16le' много байтовые символы unicode, в отличии от utf8, что каждый символ в строке будет кодирован
* с использованием 2 или 4 байтов
* 3. 'latin1' стандарт ISO-8859-1, символы кодировки поддерживают unicode символы от U+0000 до U+00FF.
* Каждый символ кодируется с использованием одного байта. Символы, не попадающие в этот диапазон,
* усекаются и будут сопоставлены с символами в этом диапазоне.
* */

/*
Декодирование (расшифровка) - преобразование буфера в строку с использованием кодировки.
Кодирование - преобразование строки в буфер.
*/


/*
Node.js поддерживает следующие кодировки двоичного кода в текст. Для таких кодировок соглашение об именах обратное.
Кодирование - преобразование буфера в строку.
Декодирование (расшифровка) - преобразование строки в буфер.

'base64' когда создаётся буфер из строки, эта кодировка будет также правильно принимать
"URL и имя файла безопасного алфавита" как указано в  RFC 4648, Section 5
например пробелы, табуляция и новые линии игнорируются.
'base64url' кодировка указанная в  RFC 4648, Section 5, когда создаётся буфер из строки, эта кодировка будет
верно принимать обычные строки в кодировке base64. При кодировании буфера в строку, эта кодировка будет
опускать заполнения.
'hex' кодирование каждого байта двумя шестнадцатеричными символами. Усечение данных может происходить при
декодировании строк, содержащих исключительно допустимые шестнадцатеричные символы.
*/

const buf9 = Buffer.from('hi', 'base64') // 86
// console.log(buf9)
// show(Buffer.from('1ag', 'hex')) // <Buffer 1a>
// show(Buffer.from('1a7g', 'hex')) // <Buffer 1a>

// Буферы и Типы Массивов

// Uint8Array - типизированный массив представляющий 8битные целые числа.
// show(new Uint8Array(2)) // [0, 0]

// TypedArray
// show(new Int8Array(2)) // [0, 0]

// Буферы являются также JavaScript Uint8Array и TypedArray экземплярами. Все TypedArray методы доступны в буферах.

// Есть два пути создания нового TypedArray экземпляра из буфера

//1. Передача буфера в конструктор TypedArray скопирует данные буфера, получим массив целых чисел, а не
// последовательность байтов.
const buf10 = Buffer.from([1, 2, 3, 4]);
// show(new Uint32Array(buf10)); // [1,2,3,4]
// show(buf10) // <Buffer 01 02 03 04>

//2. Передача буфера лежащих в основе ArrayBuffer создаст TypedArray, который разделяет память с буфером.
const buf11 = Buffer.from('hi', 'utf16le');
const uint16arr = new Uint16Array(
    buf11.buffer,
    buf11.byteOffset,
    buf11.length / Uint16Array.BYTES_PER_ELEMENT);
// show(uint16arr); // [104, 105]

/*
Можно создать новый буфер, с помощью .buffer
*/

const uint16arr2 = new Uint16Array(2);
uint16arr[0] = 5000;
uint16arr[1] = 4000;
// show(uint16arr) // [1, 2]
const buf12 = Buffer.from(uint16arr2); // создание нового буфера
const buf13 = Buffer.from(uint16arr.buffer); // копирование буфера
// show(buf12) // <Buffer 00 00>
// show(buf13) // <Buffer 5c 9b f2 1e 41...>

uint16arr2[1] = 6000;
// show(buf12) // <Buffer 00 00>
// show(buf13) // <Buffer 5c 80 27 ec 20...>


// Создавая буфер через .buffer можно использовать только часть ArrayBuffer, передавая параметры
// byteOffset и length
const uint16arr3 = new Uint16Array(20);
const buf14 = Buffer.from(uint16arr3.buffer, 0, 16);
// show(buf14.length); // 16
// show(buf14.byteOffset); // 0

/*
Buffer.from() и TypedArray.from() имеют разные свойства и реализации.
TypedArray принимает 2м аргументом функцию отображения, вызываемой на каждом элементе массива.
    TypedArray.from(source[, mapFn[, thisArg]])
Buffer.from() метод, однако, не поддерживает использование функции отображения.
    Buffer.from(array)
    Buffer.from(buffer)
    Buffer.from(arrayBuffer[, byteOffset[, length]])
    Buffer.from(string[, encoding])
*/


// Буферы и итерации
// Буфер можно обойти с помощью for...of синтаксиса
const buf15 = Buffer.from([1, 2, 3, 4]);
for (const b of buf15) {
    // show(b) // 1, 2, 3, 4
}
// Кроме того, для итерации можно использовать
const buf16 = Buffer.from('hello node.js');

// 1. buf.values()
for (const value of buf16.values()) {
    // show(value) // 104 101 108 108 111 32 ...
}
for (const value of buf16) {
    // show(value) // 104 101 108 108 111 32 ...
}

// 2. buf.keys()
for (const keys of buf16.keys()) {
    // show(keys); // 0 1 2 3 4 5 ...
}

// 3. buf.entries()
for (const keys of buf16.entries()) {
    // show(keys); // [0, 104] [1, 101] [2, 108] [3, 108] ....
}

// Buffer.byteLength(string[, encoding])
// возвращает номер байтов содержащихся в строке.
// Для 'base64', 'base64url', 'hex' всё ок. Для строк, none-base64/шестнадцатеричной кодировке (пробелы)
// может вернуть больше длину буфера, созданную из строки.
const buf17 = Buffer.from('Hi');
// show(buf17.byteLength) // 2
const buf18 = Buffer.from('h i')
// show(buf18.byteLength) // 3


// Buffer.compare(buf1, buf2) === buf1.compare(buf2)
// сравнивает буферы с целью сортировки
// возвращает число -1, 0, 1
const buf19 = Buffer.from('1234')
const buf20 = Buffer.from('0123');
const buffs = [buf19, buf20];
// show(buffs.sort(Buffer.compare)) // [ <Buffer 30 31 32 33>, <Buffer 31 32 33 34> ]


// Buffer.concat(list[, totalLength])
// возвращает новый буфер, который объединяет переданные буферы.
// totalLength - можно указать ограничение нового буфера.
// show(Buffer.concat([buf19, buf20])) // <Buffer 31 32 33 34 30 31 32 33>


// Buffer.from(array)
// получаем буфер из массива
// получим ошибку, если передаём не массив.
const buf21 = Buffer.from([250, 0x75, 0x66, 0x66, 0x65, 0x72])
// show(buf21) // <Buffer fa 75 66 66 65 72>


// Buffer.from(arrayBuffer[, byteOffset[, length]])
// создаёт ссылку на буфер, т.е. при изменении старого буфера изменится и текущий.
const uint16arr4 = new Uint16Array(2);
uint16arr[0] = 5000;
uint16arr[1] = 4000;
// show(uint16arr4) // [1, 2]
const buf22 = Buffer.from(uint16arr2); // создание нового буфера
const buf23 = Buffer.from(uint16arr.buffer); // копирование буфера
// show(buf22) // <Buffer 00 00>
// show(buf23) // <Buffer 5c 9b f2 1e 41...>

uint16arr2[1] = 6000;
// show(buf22) // <Buffer 00 00>
// show(buf23) // <Buffer 5c 80 27 ec 20...>

// Buffer.from(buffer)
// создаёт новый буфер, копирую данные из переданного буфера.
const buf24 = Buffer.from('buffer')
// show(buf24) // <Buffer 62 75 66 66 65 72>


// Buffer.from(object[, offsetOrEncoding[, length]])
// создаёт массив из переданного примита
const buf25 = Buffer.from(String('hello'))
// show(buf25) // <Buffer 68 65 6c 6c 6f>


/*
Buffer.isBuffer(obj)
является ли это буфером или нет
возвращает булево
*/
// show(Buffer.isBuffer(Buffer.from('h'))) // true
// show(Buffer.isBuffer('h')) // false


/*
* Buffer.isEncoding(encoding)
* проверка, есть ли кодировка у буфера
* возвращается булево
* */
// show(Buffer.isEncoding('utf8')) //true
// show(Buffer.isEncoding('hex')) //true
// show(Buffer.isEncoding('latin1')) //true
// show(Buffer.isEncoding('')) //false
// show(Buffer.isEncoding('utf88')) //false


/*
* Buffer.poolSize
* размер в байтах, предварительно выделенных для объединения буферов. Значение можно изменить.
* дефолтно 8192
* */


/*
* buf[index]
* обратившись по индексу в буфере, можно получить его значение.
* */
const buf26 = Buffer.from('hi')
// show(buf26) // <Buffer 68 69>
// show(buf26[0]) // 104
// show('h'.charCodeAt()) // 104


/*
* buf.buffer
* можно использовать для сравнения разных буферов
* */
const buf27 = Buffer.from('h')
const buf28 = Buffer.from('h')
// show(buf27.buffer === buf28.buffer) // true


/*
* buf.byteOffset
* Настройка для Buffer.from(arrayBuffer, byteOffset, length), которая указывается
* при создании TypedArray, который разделяет свою память с буфером, надо правильно указать byteOffset
* */
const buf29 = Buffer.from([1, 2, 3]);
// show(new Int8Array(buf29.buffer, buf29.byteOffset, buf29.length)) // Int8Array(3) [ 1, 2, 3 ]


/*
* buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
* возвращает количество с копируемых байтов
* */
const buf30 = Buffer.from('h')
const buf31 = Buffer.from('i')
// show(buf30.copy(buf31)) // 1


/*
* buf.equals(otherBuffer)
* сравниваем буферы
* возвращает булево
* */
const buf32 = Buffer.from('j')
const buf33 = Buffer.from('j')
const buf34 = Buffer.from('o')
// show(buf32.equals(buf33)) // true
// show(buf32.equals(buf34)) // false


/*
* buf.fill(value[, offset[, end]][, encoding])
* заполнение буфера данными
* */
const buf35 = Buffer.allocUnsafe(10).fill(0);
// show(buf35) // <Buffer 00 00 00 00 00 00 00 00 00 00>


/*
* buf.includes(value[, byteOffset][, encoding])
* есть ли значение в буфере
* возвращает булево
* */
const buf36 = Buffer.from('hello nodejs')
// show(buf36.includes('nodejs')) // true
// show(buf36.includes('java')) // false


/*
* buf.indexOf(value[, byteOffset][, encoding])
* поиск индекса первого вхождения строки
* */
const buf37 = Buffer.from('hello nodejs')
// show(buf37.indexOf('n')) // 6
// show(buf37.indexOf('w')) // -1


/*
* buf.keys()
* возвращает ключи у буфера
* */
const buf38 = Buffer.from('buffer')
for (const key of buf38.keys()) {
    // show(key) // 0 1 2 3 4 ...
}


/*
* buf.length
* возвращает длину байтов
* */
const buf39 = Buffer.from('buffer')
// show(buf39.length) // 6


/*
* buf.subarray([start[, end]])
* buf.slice([start[, end]])
* возвращает ссылку на буфер, но уже со смещенным началом или обрезанный
* */
const buf40 = Buffer.from('buffer');
const buf41 = buf40.subarray(1,2);
// show(buf40) // <Buffer 62 75 66 66 65 72>
// show(buf41) // <Buffer 75>


/*
* buf.swap16()
* возвращает ссылку на буфер
* */
const buff42 = Buffer.from('buffer');
const buff43 = buff42.swap16()
// show(buff42) // <Buffer 75 62 66 66 72 65>
// show(buff43) // <Buffer 75 62 66 66 72 65>
buff42[0] = 'z'
// show(buff42) // <Buffer 00 62 66 66 72 65>
// show(buff43) // <Buffer 00 62 66 66 72 65>


/*
* buf.toJSON()
* возвращает JSON представление буфера
* */
const buf44 = Buffer.from('buffer');
// show(buf44.toJSON()) // { type: 'Buffer', data: [ 98, 117, 102, 102, 101, 114 ] }


/*
* buf.values()
* возвращает значения у буфера
* */
const buf45 = Buffer.from('buffer')
for (const value of buf45.values()) {
    // show(value) // 98 117 102 102 ...
}


/*
* buf.write(string[, offset[, length]][, encoding])
* // TODO не понятно, для чего.
* */
const buf46 = Buffer.from('i')
const buf47 = Buffer.from('h')
// show(buf47.write('i'))
// show(buf46)

// Хоть и буфер является глобальным, для некоторых API надо вызывать его через require
const buffer = require('buffer')

/*
* buffer.INSPECT_MAX_BYTES
* возвращает максимальное кол-во байтов, которое возвращено при вызове buf.inspect()
* дефолтно 50
* */


/*
* buffer.kMaxLength
* максимальный размер для буфера
* */


/*
* buffer.transcode(source, fromEnc, toEnc)
* возвращает новый буфер, может перевести символ из одной кодировки в другую
* */
const buf48 = buffer.transcode(Buffer.from('a'), 'utf8', 'ascii');
// show(buf48.toString('ascii')) // a

/*
* Константы буфера
* */

/*
* buffer.constants.MAX_LENGTH
* максимальный размер для 1 буфера
* для 32битных = 1 гб
* для 64битных = 2 гб
* */


/*
* buffer.constants.MAX_STRING_LENGTH
* наибольшая строка разрешенная для строки, подсчитывается в UTF-16
* */
