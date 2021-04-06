const os = require('os');
const path = require('path');
const events = require('events');
const util = require('util');
const {show} = require('../helper');
/*
* Process это глобальный объект предоставляющий информацию о текущем процессе Node.js и контролирует его.
* process это экземпляр EventEmitter
* */


/*
* Event: 'beforeExit'
* Событие генерируется, когда Node.js очищает свой цикл событий и не имеет дополнительной работы для планирования.
* Обычно, процесс завершается, когда нет запланированный работы, но прослушивается в 'beforeExit' и тем самым
* вызвать продолжение процесса.
* */
// process.on('beforeExit', code => {
//     console.log('Process beforeExit', code); // 0
// });
//
// process.on('exit', code => {
//     console.log('Process exit with code', code); // 0
// });


/*
* Event: 'exit'
* Событие генерируется, когда nodejs собирается завершить работу в результате:
* явный вызов метода process.exit();
* event loop больше ничего не нужно выполнять.
* */
// process.on('exit', (code) => {
//     console.log(`About to exit with code: ${code}`);
// });


/*
* Event: 'message'
* Событие срабатывает каждый раз, когда дочерний процесс получает сообщение, отправленное родительским
* процессом с помощью childprocess.send();
* Сообщение проходит сериализацию и синтаксический анализ.
* */


/*
* Event: 'multipleResolves'
* Событие генерируется всякий раз, когда промис был:
* resolved more than once.
* rejected more than once.
* rejected after resolve.
* resolved after reject.
* */
// process.on('multipleResolves', (type, promise, reason) => {
//     console.error('type', type);
//     console.error('promise', promise);
//     console.error('reason', reason);
// });
//
// async function main() {
//     try {
//         return await new Promise((resolve, reject) => {
//             resolve('First call');
//             resolve('Second call');
//             reject(new Error('Swallowed reject'));
//         })
//     } catch (err) {
//         throw new Error('Failed');
//     }
// }
// main().then(console.log)
// resolve: Promise { 'First call' } 'Swallowed resolve'
// reject: Promise { 'First call' } Error: Swallowed reject
//     at Promise (*)
//     at new Promise (<anonymous>)
//     at main (*)
// First call


/*
* Event: 'rejectionHandled'
* Событие вызывается, когда у промиса выполняется promise.catch().
* */
// const unhandledRejections = new Map();
// process.on('unhandledRejection', (reason, promise) => {
//     console.log(reason, promise)
//     unhandledRejections.set(promise, reason);
// });
// process.on('rejectionHandled', (promise) => {
//     console.log(promise)
//     unhandledRejections.delete(promise);
// });


/*
* Event: 'uncaughtException'
* Событие uncaughtException генерируется, когда неперехваченное исключение JavaScript
* возвращается обратно в цикл обработки событий.
* */
// process.on('uncaughtException', (err, origin) => {
//     fs.writeSync(
//         process.stderr.fd,
//         `Caught exception: ${err}` +
//         `Exception origin: ${origin}`
//     );
// });
//
// setTimeout(() => {
//     console.log('This will still run.');
// }, 500);
//
// // Intentionally cause an exception, but don't catch it.
// nonexistentFunc();
// console.log('This will not run.');
// Caught exception: ReferenceError: nonexistentFunc is not definedException origin: uncaughtExceptionThis will still run.


/*
* Event: 'uncaughtExceptionMonitor'
* Событие генерируется до uncaughtException и вызовется ловушка
*  process.setUncaughtExceptionCaptureCallback()
* */
// process.on('uncaughtExceptionMonitor', (err, origin) => {
//     MyMonitoringTool.logSync(err, origin);
// });
// Intentionally cause an exception, but don't catch it.
// nonexistentFunc();
// Still crashes Node.js

/*
* Event: 'unhandledRejection'
* генерируется всякий раз, когда в promise отклоняется и обработчик ошибок не прикрепляется.
* */
// process.on('unhandledRejection', (reason, promise) => {
//     console.log('Unhandled Rejection at:', promise, 'reason:', reason);
//     // Application specific logging, throwing an error, or other logic here
// });
//
// (async () => {
//     new Promise((resolve => resolve(JSON.pasre('ii'))));
// })()

/*
* Event: 'warning'
* Генерируется, когда выдаётся warning сообщение.
* */
// process.on('warning', (warning) => {
//     console.log('warning')
//     console.warn(warning.name);    // Print the warning name
//     console.warn(warning.message); // Print the warning message
//     console.warn(warning.stack);   // Print the stack trace
// });
// events.defaultMaxListeners = 1;
// process.on('foo', () => {});
// process.on('foo', () => {});
// warning
// MaxListenersExceededWarning
// Possible EventEmitter memory leak detected. 2 foo listeners added.
// Use emitter.setMaxListeners() to increase limit
// MaxListenersExceededWarning: Possible EventEmitter memory leak detected.
// 2 foo listeners added. Use emitter.setMaxListeners() to increase limit


/*
* Имена предупреждений
* 'DeprecationWarning' - устаревшее API или функции node.js.
* 'ExperimentalWarning' - экспериментальное API.
* 'MaxListenersExceededWarning' - слишком много слушателей для события была зарегистрировано.
* 'TimeoutOverflowWarning' - числовое значение, которое не может поместиться в 32-разрядное целое число
* со знаком, было предоставлено setTimeout() или setInterval().
* 'UnsupportedWarning' - использование неподдерживаемого параметра или функции, которая будет проигнорирована, а не
* обработана как ошибка.
* */


/*
* Сигнальные события.
* События сигналов будет отправлены, когда Node.js получит сигнал. Не работает с Worker Threads.
* Обработчик сигнала получит имя (SIGINT, SIGTERM и т.д.) в качестве первого аргумента.
* Имена должны быть в верхнем регистре.
* */
// process.stdin.resume();
//
// process.on('SIGINT', () => {
//     console.log('SIGINT');
// });
//
// function handle(signal) {
//     console.log('received', signal);
// }
//
// process.on('SIGINT', handle);
// process.on('SIGTERM', handle);
// SIGINT
// received SIGINT

/*
* 'SIGUSR1' зарезервировано для старта отладчика. Можно установить прослушиватель, но это может помешать
* работе отладчика.
* SIGTERM' and 'SIGINT' если установлен прослушиватель, его поведение будет удалено и nodejs больше не
* будет выходить
* 'SIGPIPE' по умолчанию игнорируется, может иметь установленный слушатель.
* 'SIGHUP' генерируется, когда окно консоли закрыто, и на других платформат при различных
* аналогичных условиях.
* 'SIGTERM' - не поддерживается на windows, можно слушать.
* 'SIGINT' - на всех платформах, может быть сгенерирован ctrl+c. Не генерируется, когда включен режим сырого терминала
* и используется ctrl+c
* 'SIGBREAK' - доставляется в windows при нажатии ctrl+break.
* 'SIGWINCH' - доставляется, после изменения размера консоли. В Windows произойдет, только при записи в консоль,
* когда курсор перемещается или когда читаемый tty используется в необработанном режиме.
* 'SIGKILL' - нельзя установить слушателя, он завершит работу nodejs на всех платформах.
* 'SIGSTOP' - нельзя установить слушателя.
* 'SIGBUS', 'SIGFPE', 'SIGSEGV' and 'SIGILL' - если не вызывается с помощью kill() может оставить процесс в состоянии
* из которого не безопасно вызывать слушателей JS.
* */


/*
* process.abort()
* немедленно завершает процесс node.js.
* */


/*
* process.allowedNodeEnvironmentFlags
* только для чтения специальный набор флагов, допустимый в среде NODE_OPTIONS.
* */


/*
* process.arch
* архитектура, в которой был выполнен код node.js
* доступны: 'arm', 'arm64', 'ia32', 'mips','mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', and 'x64'.
* */
// console.log(process.arch) // x64


/*
* process.argv
* Возвращает массив аргументов, переданных в консоли.
* */
// process.argv.forEach((value, index) => {
//    console.log(`index: ${index}, value: ${value}`);
// });
// index: 0, value: C:\Program Files\nodejs\node.exe
// index: 1, value: C:\projects\v15.13.0-doc-nodejs\35 process\index
// index: 2, value: on
// index: 3, value: two=three
// index: 4, value: four


/*
* process.argv0
* Хранит argv[0] при запуске ноды
* */
// console.log(process.argv0); // node


/*
* process.channel
* Если процесс был порождён IPC channel (Child Process module). Является ссылкой для канала.
* Если канала не существует, то возвращается undefined.
* */


/*
* process.channel.ref()
* Метод заставляет канал IPC поддерживать цикл обработки событий запущенного процесса, если .inref()
* был вызван ранее.
* */


/*
* process.channel.unref()
* Метод заставляет канал IPC не поддерживать цикл обработки событий запущенным и позволяет завершиться, даже
* когда канал открыт.
* */


/*
* process.chdir(directory)
* Изменяет рабочий каталог Node.js проекта, если не удаётся вызывается исключение (если к примеру, каталога нет).
* Не работает с рабочими потоками.
* */
// console.log('start');
// try {
//     process.chdir('./tmp');
//     console.log('current directory:', process.cwd());
// } catch (err) {
//     console.log('error', err.message);
// }
// start C:\projects\v15.13.0-doc-nodejs\35 process
// current directory: C:\projects\v15.13.0-doc-nodejs\35 process\tmp


/*
* process.config
* Возвращает объект, содержащий JS параметры конфигурации, используемых для компиляции исполняемого файла node.js
* */
// console.log(process.config);
// { target_defaults:
// { cflags: [],
//     default_configuration: 'Release',
//     defines: [],
//     include_dirs: [],
//     libraries: [] },
//     variables:
//     { asan: 0,
//         build_v8_with_gn: false,
//         coverage: false,
//         debug_nghttp2: false,
//         enable_lto: false,
//         enable_pgo_generate: false,
//         enable_pgo_use: false,
//         force_dynamic_crt: 0,
//         host_arch: 'x64',
//         icu_data_in: '..\\..\\deps/icu-small\\source/data/in\\icudt64l.dat',
//         icu_endianness: 'l',
//         icu_gyp_path: 'tools/icu/icu-generic.gyp',
//         icu_locales: 'en,root',
//         icu_path: 'deps/icu-small',
//         icu_small: true,
//         icu_ver_major: '64',
//         napi_build_version: '7',
//         nasm_version: '2.14',
//         node_byteorder: 'little',
//         node_debug_lib: false,
//         node_enable_d8: false,
//         node_enable_v8_vtunejit: false,
//         node_install_npm: true,
//         node_module_version: 64,
//         node_no_browser_globals: false,
//         node_prefix: '/usr/local',
//         node_release_urlbase: 'https://nodejs.org/download/release/',
//         node_shared: false,
//         node_shared_cares: false,
//         node_shared_http_parser: false,
//         node_shared_libuv: false,
//         node_shared_nghttp2: false,
//         node_shared_openssl: false,
//         node_shared_zlib: false,
//         node_tag: '',
//         node_target_type: 'executable',
//         node_use_bundled_v8: true,
//         node_use_dtrace: false,
//         node_use_etw: true,
//         node_use_large_pages: false,
//         node_use_openssl: true,
//         node_use_pch: false,
//         node_use_perfctr: true,
//         node_use_v8_platform: true,
//         node_with_ltcg: true,
//         node_without_node_options: false,
//         openssl_fips: '',
//         openssl_no_asm: 0,
//         shlib_suffix: 'so.64',
//         target_arch: 'x64',
//         v8_enable_gdbjit: 0,
//         v8_enable_i18n_support: 1,
//         v8_enable_inspector: 1,
//         v8_no_strict_aliasing: 1,
//         v8_optimized_debug: 0,
//         v8_promise_internal_field_count: 1,
//         v8_random_seed: 0,
//         v8_trace_maps: 0,
//         v8_typed_array_max_size_in_heap: 0,
//         v8_use_snapshot: true,
//         want_separate_host_toolset: 0 } }


/*
* process.connected
* Если процесс запускается с каналом IPC (Child Process and Cluster) возвращается true,
* а при process.disconnect() вернёт false.
* Как только process.connected = false, невозможно отправлять сообщения по каналу IPC с помощью process.send().
* */


/*
* process.cpuUsage([previousValue])
* Возвращает пользовательское и системное использование процессорного времени для текущего процесса в виде
* объекта { user: ..., system: ... } в виде микросекундных значений (миллионная доля секунды)
* */
// const startUsage = process.cpuUsage();
// console.log(startUsage);
// { user: 78000, system: 15000 }


/*
* process.cwd()
* возвращает текущую рабочий каталог nodejs процесса
* */
// console.log(process.cwd()); // C:\projects\v15.13.0-doc-nodejs\35 process


/*
* process.debugPort
* Порт используемый отладчиком.
* */


/*
* process.disconnect()
* Если процесс запускается с каналом IPC (Child Process, Cluster) данный метод закрывает канал для
* родительским процессов, позволяя дочернему процессу завершиться.
* Если процесс запущен не с каналом IPC, тогда вернётся undefined.
* */


/*
* process.dlopen(module, filename[, flags])
* Динамически загружать общие объекты. Используется для require().
* Следует использовать require() если нет особых причин, таких как настраиваемые флаги dlopen или загрузка
* из модулей ES.
* Флаг - целое число, которое позволяет указать поведение для метода.
* RTLD_LAZY - ленивая привязка, по умолчанию.
* RTLD_NOW - разрешить все неопределенные символы в библиотеке до возврата из dlopen.
* RTLD_GLOBAL - символы, определенные библиотекой, будут доступны для разрешения символов
* в последовательно загружаемых библиотеках.
* RTLD_LOCAL - обратно от RTLD_GLOBAL. Поведение по умолчанию, если ничего не указано.
* RTLD_DEEPBIND - чтобы библиотека использовала собственные символы, вместо того, чтобы использовать
* из ранее загруженных библиотек.
* Обязательно должен быть передан модуль.
* TODO: получаю ошибку при выполнении, не нашёл примеров.
* */
// process.dlopen({ exports: {} }, path.join(__dirname, 'local.node'),
//     os.constants.dlopen.RTLD_NOW);
// Error: The specified module could not be found.


/*
* process.emitWarning(warning[, options])
* Настраиваемое предупреждение процесса или для конкретного приложения.
* Можно прослушивать добавив warning.
* */
// process.emitWarning('Need more sleep', {
//     code: 'LITTLE_WARNING',
//     detail: 'good sleep'
// });
// (node:14604) [LITTLE_WARNING] Warning: Need more sleep
// good sleep


/*
* process.env
* Возвращает объект содержащий пользовательскую среду.
* */
// show(process.env);
// { FPS_BROWSER_APP_PROFILE_STRING: 'Internet Explorer',
//     CommonProgramFiles: 'C:\\Program Files\\Common Files',
//     ProgramFiles: 'C:\\Program Files',
//     PROMPT: '$P$G',
//     SESSIONNAME: 'Console',
//     ChocolateyInstall: 'C:\\ProgramData\\chocolatey',
// ...

// process.env.hello = 'hello';
// show(process.env.hello); // hello
// Значение преобразуется к строке
// process.env.hello = null;
// show(process.env.hello); // 'null'
// Можно удалить значение с помощью delete
// process.env.hello = 'Hi';
// delete process.env.hello;
// show(process.env.hello); // undefined


/*
* process.execArgv
* Возвращает набор параметров командной строки переданных при запуске процесса.
* */
// node --harmony index
// show(process.execArgv); ['--harmony']]


/*
* process.execPath
* Возвращает абсолютный путь до node.exe
* */
// show(process.execPath);
// C:\Program Files\nodejs\node.exe


/*
* process.exit([code])
* Завершает процесс node.js со статусом, указанным в коде.
* */
// show('h') // h
// process.exit(2);
// show('i') // это уже отобразится.


/*
* process.exitCode
* Число, которое будет кодом выхода процесса, когда процесс завершается без указания кода
* process.exit()
* */


/*
* process.getegid()
* Возвращает числовой идентификатор процесса группы node.js
* */
// show(process.getegid());


/*
* process.geteuid()
* возвращает числовой идентификатор пользователя процесса.
* */
// show(process.geteuid())


/*
* process.getgroups()
* Массив с дополнительными идентификаторами групп
* */
// show(process.getgroups());


/*
* process.hasUncaughtExceptionCaptureCallback()
* установлен ли обратный вызов для process.setUncaughtExceptionCaptureCallback().
* */
// show(process.hasUncaughtExceptionCaptureCallback()) // false


/*
* process.hrtime([time]) (устаревшее)
* Возвращает текущее время с высоким разрешением в массиве кортежей [ секунды, наносекунды ]
*
* */
// const NS_PER_SEC = 1e9;
// const time = process.hrtime();
// show(time); // [ 1047020, 124322000 ]
//
// setTimeout(() => {
//     const diff = process.hrtime(time);
//     show(diff); // [ 1, 15056900 ]
//
//     show(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
//     // Benchmark took 1011877800 nanoseconds
//
// }, 1000);


/*
* process.hrtime.bigint()
* Возвращает текущее время с высоким разрешением в bigint
* */
// const start = process.hrtime.bigint();
// show(start); // 1047098179142700n
// setTimeout(() => {
//     const end = process.hrtime.bigint();
//     show(end); // 1047099193483500n
//     console.log(`Benchmark took ${end - start} nanoseconds`);
//     // Benchmark took 1014340800 nanoseconds
// }, 1000);


/*
* process.initgroups(user, extraGroup)
* считывает файл и инициализирует список доступа группы.
* */
// show(process.getgroups())


/*
* process.kill(pid[, signal])
* Отправляет сигнал по pid и убивает его.
* */
// process.on('SIGINT', () => show('SIGINT'));
// setTimeout(() => {
//     show('setTimeout');
//     process.exit(0);
// }, 1000);
// show(process.pid); // 14824
// process.kill(process.pid, 'SIGINT');


/*
* process.memoryUsage()
* Возвращает объект, описывающий использование памяти процессом node.js измеренное в байтах.
* */
// show(process.memoryUsage());
// {
//     rss: 18595840,
//     heapTotal: 4317184,
//     heapUsed: 3483640,
//     external: 289994,
//     arrayBuffers: 33420
// }


/*
* process.memoryUsage.rss()
* Возвращает число RSS в байтах
* тоже самое, что и memoryUsage, но текущий работает быстрее.
* */
// show(process.memoryUsage.rss()) //18636800


/*
* When use queueMicrotask() vs process.nextTick()
* queueMicrotask() аналог process.nextTick()
* */
// Promise.resolve().then(() => show(2));
// queueMicrotask(() => show(3));
// process.nextTick(() => show(1));
// 1, 2, 3
/*
* разница в том, что nextTick() позволяет указывать дополнительные значения, которые будут
* передаваться в качестве аргументов отложенной функции при её вызове.
* */


/*
* process.noDeprecation
* Указывает установлен ли флаг --no-deprecation при запуске node.js
* */
// node --no-deprecation index
// show(process.noDeprecation) // true


/*
* process.pid
* Возвращает pid процесс
* */
// show(process.pid); // 7396


/*
* process.platform
* Показывает идентификатор операционной системы, в которой запущена node.js
* */
// show(process.platform);


/*
* process.ppid
* Возвращает pid родительского процесса
* */
// show(process.ppid); // 1864


/*
* process.release
* Релиз node.js
* */
// show(process.release);
// {
//     name: 'node',
//     sourceUrl: 'https://nodejs.org/download/release/v15.13.0/node-v15.13.0.tar.gz',
//     headersUrl: 'https://nodejs.org/download/release/v15.13.0/node-v15.13.0-headers.tar.gz',
//     libUrl: 'https://nodejs.org/download/release/v15.13.0/win-x64/node.lib'
// }


/*
* process.report
* генерация диагностических отчётов для текущего процесса
* */
// show(process.report);
// {
//     writeReport: [Function: writeReport],
//     getReport: [Function: getReport],
//     directory: [Getter/Setter],
//     filename: [Getter/Setter],
//     compact: [Getter/Setter],
//     signal: [Getter/Setter],
//     reportOnFatalError: [Getter/Setter],
//     reportOnSignal: [Getter/Setter],
//     reportOnUncaughtException: [Getter/Setter]
// }


/*
* process.report.compact
* Компактная версия отчёта?
* */
// show(process.report.compact); // false


/*
* process.report.directory
* Справочник, в котором написан отчёт
* */
// show(process.report.directory)


/*
* process.report.filename
* файл, в котором указан отчёт
* */
// show(process.report.filename)


/*
* process.report.getReport([err])
* Возвращает объект диагностического отчёта
* */
// const data = process.report.getReport();
// show(data.header.nodejsVersion);
// const fs = require('fs');
// fs.writeFileSync(util.inspect(data), 'my-report.log', 'utf8');


/*
* process.report.reportOnFatalError
* true если отчёт создаётся при фатальных ошибка (нехватка памяти, неудачные утверждения c++)
* */
// show(process.report.reportOnFatalError); // false


/*
* process.report.reportOnSignal
* true когда диагностический отчёт создаётся, когда процесс получает сигнал process.report.signal.
* */
// show(process.report.reportOnSignal); // false


/*
* process.report.reportOnUncaughtException
* true когда отчёт создаётся о неперехваченном исключении.
* */


/*
* process.report.signal
* Сигнал для запуска создания диагностического отчёта. По умолчанию SIGUSR2
* */


/*
* process.report.writeReport([filename][, err])
* Записывает диагностический отчёт в файл.
* */
// process.report.writeReport(); // создался report.20210406.214151.7320.0.001.json


/*
* process.resourceUsage()
* Использование ресурсов для текущего процесса.
* */
// show(process.resourceUsage());
// {
//     userCPUTime: 62000,
//     systemCPUTime: 31000,
//     maxRSS: 18360,
//     sharedMemorySize: 0,
//     unsharedDataSize: 0,
//     unsharedStackSize: 0,
//     minorPageFault: 0,
//     majorPageFault: 5174,
//     swappedOut: 0,
//     fsRead: 2,
//     fsWrite: 0,
//     ipcSent: 0,
//     ipcReceived: 0,
//     signalsCount: 0,
//     voluntaryContextSwitches: 0,
//     involuntaryContextSwitches: 0
// }


/*
* process.send(message[, sendHandle[, options]][, callback])
* если процесс создаётся с каналом IPC, текущий метод способен отправить сообщения в родительский процесс.
* Если родительского процесса нет - undefined
* */


/*
* process.setegid(id)
* Устанавливает эффективный групповой идентификатор процесса.
* */


/*
* process.seteuid(id)
* устанавливает эффективную идентификацию пользователя процесса.
* */


/*
* process.setgid(id)
* устанавливает групповой идентификатор процесса
* */


/*
* process.setgroups(groups)
* идентификаторы дополнительных групп для процесса node.js
* */


/*
* process.setuid(id)
* идентификатор пользователя процесса.
* */


/*
* process.setUncaughtExceptionCaptureCallback(fn)
* устанавливает функцию, которая будет вызываться при возникновении неперехваченного исключения,
* которое получит само значение исключения в качестве первого аргумента.
* */


/*
* process.stderr
* возвращает поток.
* */


/*
* process.stderr.fd
* свойство относится к stderr, в рабочих потоках не работает.
* */


/*
* process.stdin
* поток подключенных stdin
* */


/*
* process.stdin.fd
* свойство относится к stdin
* */

/*
* process.stdout
* поток подключенный к stdout
* */


/*
* process.stdout.fd
* свойство stdout
* */


/*
* Замечания по поводу I/0 процесса
* stdout и stderr отличаются от других процессов node.js
* Они используются внутри console.log(), console.error()
* Записи могут быть синхронными
* */


/*
* process.title
* возвращает название текущего процесса.
* */


/*
* process.traceDeprecation
* установлен ли флаг --trace-deprecation для текущего процесса
* */


/*
* process.umask(mask)
* устанавливает маску создания файлового режима процесса node.js
* */
// const newMask = 0o022;
// const oldMask = process.umask(newMask);
// show(`Changed umask from ${oldMask.toString(8)} to ${newMask.toString(8)}`);
// Changed umask from 0 to 22


/*
* process.uptime()
* Возвращает количество секунд, в течение которых выполнялся текущий процесс node.js
* */


/*
* process.version
* версия node.js, аналог node -v
* */
// show(process.version); //15.13.0


/*
* process.versions
* объект версии nodejs с зависимостями
* */
// show(process.versions);
// {
//     node: '15.13.0',
//     v8: '8.6.395.17-node.28',
//     uv: '1.41.0',
//     zlib: '1.2.11',
//     brotli: '1.0.9',
//     ares: '1.17.1',
//     modules: '88',
//     nghttp2: '1.42.0',
//     napi: '8',
//     llhttp: '2.1.3',
//     openssl: '1.1.1j+quic',
//     cldr: '38.1',
//     icu: '68.2',
//     tz: '2020d',
//     unicode: '13.0',
//     ngtcp2: '0.1.0-DEV',
//     nghttp3: '0.1.0-DEV'
// }
