const {show} = require('../helper');
/*
* Эти объекты доступны во всех модулях, следующие переменные могут оказаться глобальными, но это не так.
* Они существуют только в составе модулей. Подробнее в CommonJS
* __dirname
* __filename
* exports
* module
* require()
* */


/*
* Class: AbortController
* Позволяет отменять выбранные API на основе обещаний
* */
// const ac = new AbortController();
// ac.signal.addEventListener('abort', () => console.log('Aborted!'),
//     {once: true});
// ac.abort();
// show(ac.signal.aborted);  // Prints True


/*
* abortController.abort()
* отправляет сигнал 'abort'
* */


/*
* Class: AbortSignal
* используется для уведомления наблюдателей при вызове метода abort()
* */


/*
* Static method: AbortSignal.abort()
* возвращает уже прерванный сигнал AbortSignal
* */


/*
* Event: 'abort'
* Событие вызывается при методе abortController.abort().
* Принимает аргумент объекта со свойством установленным abort
* */
// const ac = new AbortController();
// ac.signal.onabort = () => console.log('aborted!');
//
// // Or the EventTarget API...
// ac.signal.addEventListener('abort', (event) => {
//     console.log(event.type);  // Prints 'abort'
// }, { once: true });
//
// ac.abort();
// aborted!
// abort


/*
* abortSignal.aborted
* true после прерывания.
* */


/*
* abortSignal.onabort
* необязательная функция, которую пользователь может установить код когда abort() вызывается.
* */


/*
* global
* область верхнего уровня.
* */


