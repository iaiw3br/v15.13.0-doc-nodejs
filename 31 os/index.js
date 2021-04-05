const os = require('os');
const {show} = require('../helper')
/*
* os модуль предоставляет информацию о операционной системе и свойства.
* */


/*
* os.EOL
* маркер в конце строки в зависимости от операционной системы.
* \n on POSIX
* \r\n on Windows
* */


/*
* os.arch()
* ЦП операционной системы 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', and 'x64'
* */
// show(os.arch()) // x64


/*
* os.cpus()
* возвращает массив данных о ядрах
* */
// show(os.cpus())

// [
//     {
//         model: 'Intel(R) Core(TM) i5-7300HQ CPU @ 2.50GHz',
//         speed: 2496,
//         times: {
//             user: 16904562,
//             nice: 0,
//             sys: 12199234,
//             idle: 236951250,
//             irq: 3007390
//         }
//     },
//     {
//         model: 'Intel(R) Core(TM) i5-7300HQ CPU @ 2.50GHz',
//         speed: 2496,
//         times: {
//             user: 20412328,
//             nice: 0,
//             sys: 8709437,
//             idle: 236933046,
//             irq: 155718
//         }
//     },
//     {
//         model: 'Intel(R) Core(TM) i5-7300HQ CPU @ 2.50GHz',
//         speed: 2496,
//         times: {
//             user: 20101296,
//             nice: 0,
//             sys: 7152859,
//             idle: 238800656,
//             irq: 122343
//         }
//     },
//     {
//         model: 'Intel(R) Core(TM) i5-7300HQ CPU @ 2.50GHz',
//         speed: 2496,
//         times: {
//             user: 18773218,
//             nice: 0,
//             sys: 5964281,
//             idle: 241317328,
//             irq: 96984
//         }
//     }
// ]


/*
* os.endianness()
* информация о байтах CPU
* могут быть BE, LE
* */
// show(os.endianness()) // LE


/*
* os.freemem()
* возвращает количество свободной памяти в байтах в виде целого числа
* */
// show(os.freemem()) //9981988864


/*
* os.getPriority([pid])
* возвращает приоритет для процесса указанного в pid
* */
// show(os.getPriority()) //0


/*
* os.homedir()
* показывает путь к домашней директории
* */
// show(os.homedir()) // C:\Users\Artem


/*
* os.hostname()
* возвращает имя хоста операционной системы
* */
// show(os.hostname()) // DESKTOP-QTEP0M8


/*
* os.loadavg()
* возвращает массив включающий 1, 5 и 15 минут среднее значение загрузки.
* unix - возвращаются данные
* windows - всегда 0
* */
// show(os.loadavg()) // [ 0, 0, 0 ]


/*
* os.networkInterfaces()
* возвращает объект включающий сетевые настройки по адресу.
* */
// show(os.networkInterfaces())
// {
//     Ethernet: [
//         {
//             address: 'fe80::d41f:9615:4e14:ea72',
//             netmask: 'ffff:ffff:ffff:ffff::',
//             family: 'IPv6',
//             mac: '00:00:00:00:00:00',
//             internal: false,
//             cidr: 'fe80::d41f:9615:4e14:ea72/64',
//             scopeid: 5
//         },
//         {
//             address: '192.168.31.71',
//             netmask: '255.255.255.0',
//             family: 'IPv4',
//             mac: '00:00:00:00:00:00',
//             internal: false,
//             cidr: '192.168.31.71/24'
//         }
//     ],
//         'Loopback Pseudo-Interface 1': [
//     {
//         address: '::1',
//         netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
//         family: 'IPv6',
//         mac: '00:00:00:00:00:00',
//         internal: true,
//         cidr: '::1/128',
//         scopeid: 0
//     },
//     {
//         address: '127.0.0.1',
//         netmask: '255.0.0.0',
//         family: 'IPv4',
//         mac: '00:00:00:00:00:00',
//         internal: true,
//         cidr: '127.0.0.1/8'
//     }
// ]
// }


/*
* os.platform()
* возвращает строку идентификатор операционной платформы.
* 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', and 'win32'
* значение может быть 'android' если node.js установлена на такой операционной системе.
* */
// show(os.platform()) // win32


/*
* os.release()
* возвращает операционную систему в виде строки
* */
// show(os.release()) // 10.0.19042


/*
* os.setPriority([pid, ]priority)
* Установить приоритет планирования для процесса, указанного в pid. Если pid = 0 или не указан, используется
* текущий процесс.
* */


/*
* os.tmpdir()
* Возвращает по умолчанию папку для операционной системы
* */
// show(os.tmpdir()) // C:\Users\Artem\AppData\Local\Temp


/*
* os.totalmem()
* возвращает общее количество памяти в виде байтов
* */
// show(os.totalmem()) // 17066700800


/*
* os.type()
* возвращает имя операционной систему.
* 'Linux' - Linux, 'Darwin' - macOS, 'Windows_NT' - Windows.
* */
// show(os.type()) // Windows_NT


/*
* os.uptime()
* показывает время безотказной работы системы
* */
// show(os.uptime()) // 524986


/*
* os.userInfo([options])
* возвращает информацию о текущем пользователе.
* */
// show(os.userInfo())
// {
//     uid: -1,
//     gid: -1,
//     username: 'Artem',
//     homedir: 'C:\\Users\\Artem',
//     shell: null
// }


/*
* os.version()
* версия операционной системы
* */
// show(os.version()) //Windows 10 Enterprise
