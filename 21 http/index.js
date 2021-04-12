const http = require('http');
const {show} = require('../helper');
/*
* Для использования необходимо подключить http через require.
* HTTP интерфейс в node.js для поддержки многих функции протокола, которые традиционно было трудно поддерживать.
* В частности, большие сообщения, возможно, закодированные по частям. Интерфейс старается никогда не
* буферизировать целые запросы или ответы, поэтому пользователь может передавать данные в потоке.
* Заголовки HTTP могут быть представлены в следующем виде:
* {
* 'content-length': '123',
* 'content-type': 'text/plain',
* 'connection': 'keep-alive',
* 'host': 'mysite.com',
* 'accept': '*//*'
* }
* Ключи в нижнем регистре, значения не изменяются.
* Для поддержки полного спектра возможных HTTP приложений, node.js HTTP API очень низкоуровневый.
* Занимается только обработкой потоков и анализом сообщений. Разбирает сообщение на заголовки и тело, но не
* анализирует их.
* Необработанные заголовки сохраняются в свойстве rawHeaders: ['content-length': '123' ...]
*/


/*
* Class: http.Agent
* Отвечает за управление сохранением и повторным использованием соединения для клиентов HTTP.
* Очередь отправленных запросов для получения хоста и порта, повторное использование одного соединения сокета
* пока очередь не станет пустой. В этот момент сокет уничтожается либо помещается в пул, где сохраняется для
* повторного использования для запросов к тому же хосту и порту.
* Агент может использоваться для индивидуального запроса
* */
// http.get({
//     hostname: 'localhost',
//     port: 80,
//     path: '/',
//     agent: false, // Create a new agent for this one request
// }, res => {
//     // some logic
// });


/*
* new Agent([options])
* Можно настроить агент
* */
// const keepAliveAgent = new http.Agent({ keepAlive: true });
// options.agent = keepAliveAgent;
// http.request(options, onResponseCallback);


/*
* agent.createConnection(options[, callback])
* Создаёт поток, сокет, который будет использоваться для запросов HTTP.
* */
// const agent = new http.Agent({});
// const createConnection = agent.createConnection;
// show(createConnection.toString());
// function connect(...args) {
//     const normalized = normalizeArgs(args);
//     const options = normalized[0];
//     debug('createConnection', normalized);
//     const socket = new Socket(options);
//
//     if (options.timeout) {
//         socket.setTimeout(options.timeout);
//     }
//
//     return socket.connect(normalized);
// }


/*
* agent.keepSocketAlive(socket)
* Вызывается, когда сокет отключается от запроса и может быть сохранён агентом.
* */


/*
* agent.reuseSocket(socket, request)
* Вызывается, когда сокет присоединяется к запросу после сохранения из-за параметров активности.
* */


/*
* agent.destroy()
* Уничтожить все сокеты, используемые агентом.
* */


/*
* agent.freeSockets
* Массив активных сокетов.
* */


/*
* agent.getName(options)
* Получить уникальное имя для набора параметров запроса, чтобы определить, можно ли повторно
* использовать соединение.
* */


/*
* agent.maxFreeSockets
* По умолчанию 256
* */


/*
* agent.maxSockets
* По умолчанию Infinity
* */


/*
* agent.maxTotalSockets
* По умолчанию Infinity. Сколько сокетов может быть открыто у агента.
* */


/*
* agent.requests
* Объект, содержащий очереди запросов, которые не были назначены сокетам
* */


/*
* agent.sockets
* Объект, который содержит массив сокетов, используемых в данный момент агентом.
* */


/*
* Class: http.ClientRequest
* Объект создан внутри и возвращён из http.request()
* Представляет незавершенный запрос, заголовок которого уже поставлен в очередь. Заголовок может быть
* изменён используя setHeader(name, value), getHeader(name), removeHeader(name).
* Чтобы получить ответ, нужно добавить слушателя для response для объекта запроса response будет вызван запрос
* объекта, когда заголовок ответа будут получены.
* */


/*
* Event: 'abort'
* Вызывается, когда запрос был прекращен клиентом. Это событие вызовется один раз при первом вызове abort()
* */


/*
* Event: 'connect'
* Вызывается каждый раз когда сервер отвечает на запрос с помощью метода CONNECT. Если это событие не прослушивается
* то клиенты получающие connect, соединения будут закрыты.
* Этому событию гарантировано будет передано событие net.Socket
* */
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('ok');
// });
//
// server.on('connection', (req, socket, head) => {
//     console.log(req)
//     console.log(socket)
//     console.log(head)
// }).listen(3000)


/*
* Event: 'continue'
* Вызывается, когда сервер отправляет '100 Continue HTTP запрос, обычно потому что запрос включает
* 'Expect: 100-continue'.
* */


/*
* Event: 'information'
* Вызывается, когда сервер отправляет 1xx ответ (кроме 101 обновление).
* */
// const options = {
//     host: 'localhost',
//     port: 3000,
//     path: '/hi',
// }
// const req = http.request(options);
// req.end();
//
// req.on('information', info => show(info.statusCode));


/*
* Event: 'response'
* Вызывается, когда ответ получает этот запрос. Событие срабатывает только один раз.
* */


/*
* Event: 'timeout'
* Вызывается, когда сокет выходит из строя по истечении времени ожидания. Это только уведомление и такой сокет
* надо закрыть вручную.
* */


/*
* Event: 'upgrade'
* Вызывается каждый раз, когда сервер отправляет запрос с обновлением.
* */
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('okay');
// });
// server.on('upgrade', (req, socket, head) => {
//     socket.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
//         'Upgrade: WebSocket\r\n' +
//         'Connection: Upgrade\r\n' +
//         '\r\n');
//
//     socket.pipe(socket); // echo back
// });
// server.listen(1337, '127.0.0.1', () => {
//
//     // make a request
//     const options = {
//         port: 1337,
//         host: '127.0.0.1',
//         headers: {
//             'Connection': 'Upgrade',
//             'Upgrade': 'websocket'
//         }
//     };
//
//     const req = http.request(options);
//     req.end();
//
//     req.on('upgrade', (res, socket, upgradeHead) => {
//         console.log('got upgraded!');
//         socket.end();
//         process.exit(0);
//     });
// });


/*
* request.aborted
* true если запрос был прерван.
* */


/*
* request.end([data[, encoding]][, callback])
* Завершает отправку запроса. Если какие-то части тела не отправлены, он смывает их в поток.
* Если есть какие-то данные ты вызовется request.write(), а затем request.end()
* */


/*
* request.destroy([error])
* Разрушает запрос.
* */


/*
* request.destroyed
* true после request.destroy()
* */


/*
* request.flushHeaders()
* Очищает заголовки запроса.
* node.js обычно буферизирует заголовки запроса внутри request.end(). Затем пытается упаковать заголовки
* внутри TCP пакета.
* */


/*
* request.getHeader(name)
* Читает заголовок запроса.
* */


/*
* request.getRawHeaderNames()
* Возвращает массив уникальных имён с учетом регистра.
* */


/*
* request.maxHeadersCount
* По умолчанию 2000, максимальный лимит заголовков ответа.
* */


/*
* request.path
* Путь запроса
* */


/*
* request.removeHeader(name)
* Удаляет заголовок, который находится внутри объекта заголовка.
* */
// request.removeHeader('Content-Type');


/*
* request.reusedSocket
* true если отправляется запрос через используемое соединение.
* */
// http.createServer((req, res) => {
//     res.write('hello');
//     res.end();
// }).listen(3000);
//
// setInterval(() => {
//     http.get('http://localhost:3000',res => {
//         res.on('data', data => {
//             show(data.toString());
//         });
//     });
// }, 5000);


/*
* request.setHeader(name, value)
* Устанавливает заголовок. Если заголовок уже есть, то он заменится.
* */
// request.setHeader('Content-Type', 'application/json');
// request.setHeader('Cookie', ['type=ninja', 'language=javascript']);


/*
* http.validateHeaderName(name)
* Проверяет корректность имени в заголовке
* */
// const { validateHeaderName } = require('http');
//
// try {
//     validateHeaderName('');
// } catch (err) {
//     err instanceof TypeError; // --> true
//     err.code; // --> 'ERR_INVALID_HTTP_TOKEN'
//     err.message; // --> 'Header name must be a valid HTTP token [""]'
// }


/*
* http.validateHeaderValue(name, value)
*
* */
// const { validateHeaderValue } = require('http');
// try {
//     validateHeaderValue('x-my-header', undefined);
// } catch (err) {
//     err instanceof TypeError; // --> true
//     err.code === 'ERR_HTTP_INVALID_HEADER_VALUE'; // --> true
//     err.message; // --> 'Invalid value "undefined" for header "x-my-header"'
// }
