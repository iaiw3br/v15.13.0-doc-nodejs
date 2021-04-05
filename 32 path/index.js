const path = require('path');
const {show} = require('../helper');
/*
* Модуль рассчитан на работу с путями к файлам или каталогам.
* */

/*
* path.basename(path[, ext])
* возвращает последнюю часть пути
* */
// show(path.basename('foo/baz/index.html')) // index.html


/*
* path.delimiter
* позволяет разделить пути
* Windows ;
* POSIX :
* */
// show(path.delimiter) //;


/*
* path.dirname(path)
* возвращает путь до директории
* */
// show(path.dirname('/goo/basd/sds/ewe')) // /goo/basd/sds


/*
* path.extname(path)
* возвращает расширение файла в пути
* */
// show(path.extname('work/js/index.js')) // .js


/*
* path.format(pathObject)
* возвращает путь до файла, указанный в объекте
* */
// show(path.format({ // /home/user/dir\file.txt
//         root: '/ignored',
//         dir: '/home/user/dir',
//         base: 'file.txt'
//     }
// ));


/*
* path.isAbsolute(path)
* является ли переданный путь абсолютным
* */
// POSIX
// show(path.isAbsolute('foo/baz')) //true
// Windows
// show(path.isAbsolute('foo/baz')) //false


/*
* path.join([...paths])
* соединяет переданные пути в строку
* */
// show(path.join('foo', 'naz', 'baz', '..')) // foo\naz


/*
* path.normalize(path)
* исправляет переданный путь
* */
// show(path.normalize('C:\\temp\\\\foo\\bar\\..\\')) // C:\temp\foo\


/*
* path.parse(path)
* возвращает объект из переданного пути
* */
// path.parse('/home/user/dir/file.txt');
// {
//     root: '/',
//     dir: '/home/user/dir',
//     base: 'file.txt',
//     ext: '.txt',
//     name: 'file'
// }


/*
* path.posix
* подключает особенности posix путей
* */


/*
* path.relative(from, to)
* возвращает относительный путь от и до текущей рабочей директории.
* */
// show(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb')) // ..\..\impl\bbb


/*
* path.resolve([...paths])
* преобразует к абсолютным путям.
* */
// show(path.resolve('foo/bar', 'baz')) path\foo\bar\baz


/*
* path.sep
* показывает разделитель для операционной системы
* windows \
* posix /
* */
// show(path.sep) // \


/*
* path.toNamespacedPath(path)
*
* */
// show(path.toNamespacedPath(__dirname)) // \\?\C:\projects\doc-nodejs\32 path


/*
* path.win32
* доступ к реализация Win32 путей.
* */
