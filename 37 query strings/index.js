const querystring = require('querystring');
/*
* Предоставляет утилитлы для парсинга и форматирования URL строк
* */

/*
* querystring.decode()
* alias querystring.parse().
* */


/*
* querystring.encode()
* alias querystring.stringify().
* */


/*
* querystring.escape(str)
* Процентное кодирования для строки. Использует querystring.stringify()
* */


/*
* querystring.parse(str[, sep[, eq[, options]]])
* парсит url строку в объект
* */
// 'foo=bar&abc=xyz&abc=123'
// {
//     foo: 'bar',
//     abc: ['xyz', '123']
// }


/*
* querystring.stringify(obj[, sep[, eq[, options]]])
* из объекта делает строку
* */
// {
//     foo: 'bar',
//     abc: ['xyz', '123']
// }
// 'foo=bar&abc=xyz&abc=123'


/*
* querystring.unescape(str)
* Выполняет декодирование символов URL, закодированных в процентах, на заданной строке.
* */
