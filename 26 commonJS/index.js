/*
* Модули кэшируются после первой загрузки.
* Если файла не найдено, то node.js найдет: .js, .json, .node
* */


/*
*
* __dirname имя каталога текущего модуля
* __filename имя файла текущего модуля
* require() импорт модулей
* require.cache - объект, в котором кешируются модули
* require.main -
* */
// console.log(require.main);
// Module {
//     id: '.',
//         exports: {},
//     parent: null,
//         filename: 'C:\\projects\\v15.13.0-doc-nodejs\\26 commonJS\\index.js',
//         loaded: false,
//         children: [],
//         paths:
//     [ 'C:\\projects\\v15.13.0-doc-nodejs\\26 commonJS\\node_modules',
//         'C:\\projects\\v15.13.0-doc-nodejs\\node_modules',
//         'C:\\projects\\node_modules',
//         'C:\\node_modules' ] }


/*
* require.resolve(request,[options])
* можно передать список путей, по которым искать нужный модуль, без ./ или /
* */
