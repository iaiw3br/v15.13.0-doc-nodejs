const url = require('url');
/*
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                              href                                              │
├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │          host          │           path            │ hash  │
│          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │    hostname     │ port │ pathname │     search     │       │
│          │  │                     │                 │      │          ├─┬──────────────┤       │
│          │  │                     │                 │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │    hostname     │ port │          │                │       │
│          │  │          │          ├─────────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │          host          │          │                │       │
├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
│   origin    │                     │         origin         │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
│                                              href                                              │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
*/
/* Url предоставляет утилитлы для URL для разрешения и парсинга.*/
// const myURL = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
// console.log(myURL)
// URL {
//     href:
//         'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash',
//             origin: 'https://sub.example.com:8080',
//         protocol: 'https:',
//         username: 'user',
//         password: 'pass',
//         host: 'sub.example.com:8080',
//         hostname: 'sub.example.com',
//         port: '8080',
//         pathname: '/p/a/t/h',
//         search: '?query=string',
//         searchParams: URLSearchParams { 'query' => 'string' },
//     hash: '#hash' }


/*
* new URL(input[, base])
* */
// const myURL = new URL('/foo', 'https://example.org/');
// https://example.org/foo


/*
* url.hash
* Получает и задаёт фрагмент URL
* */
// const myURL = new URL('https://example.org/foo#bar');
// console.log(myURL.hash);
// Prints #bar


/*
* url.hostname
* */
// const myURL = new URL('https://example.org:81/foo');
// console.log(myURL.hostname);
// Prints example.org


/*
* url.href
* */
// const myURL = new URL('https://example.org/foo');
// console.log(myURL.href);
// Prints https://example.org/foo


/*
* url.origin
* */
// const myURL = new URL('https://example.org/foo/bar?baz');
// console.log(myURL.origin);
// Prints https://example.org


/*
* url.password
* */
// const myURL = new URL('https://abc:xyz@example.com');
// console.log(myURL.password);
// Prints xyz


/*
* url.pathname
* */
// const myURL = new URL('https://example.org/abc/xyz?123');
// console.log(myURL.pathname);
// Prints /abc/xyz


/*
* url.search
* */
// const myURL = new URL('https://example.org/abc?123');
// console.log(myURL.search);
// Prints ?123


/*
* url.searchParams
* */
// const myUrl = new URL('https://example.org/abc?foo=~bar');
// console.log(myUrl.search);  // prints ?foo=~bar


/*
* url.toJSON()
*
* */
// const myUrl = new URL('https://example.org/abc?foo=~bar');
// console.log(myUrl.toJSON());


/*
* new URLSearchParams(string)
* */
// params = new URLSearchParams('user=abc&query=xyz');
// console.log(params.get('user'));
// Prints 'abc'
