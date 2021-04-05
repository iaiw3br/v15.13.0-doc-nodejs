const fs = require('fs');
const fsPromises = fs.promises;
/*
* The common objects are shared by all the file system API variants (promise, callback and synchronous).
* */


/*
* fs.opendir
* */
// (async () => {
//     const dir = await fsPromises.opendir('./');
//     for await (const file of dir)
//         // console.log(file.isBlockDevice())
//         console.log(file)
// })()

/*
* dir.close()
* dir.close(callback)
* close the directories.
* */



// Class: fs.Dirent

// dirent.isBlockDevice()
// returns true if the object a block device.
// (async () => {
//     const dir = await fsPromises.opendir('./');
//     for await (const file of dir)
//         console.log(file.isBlockDevice()) // false false ...
// })()



/*
* dirent.isCharacterDevice()
* TODO: Не нашёл примеров, вернуться.
* */


/*
* dirent.isDirectory()
* returns true if the object a file system directory.
* */


/*
* dirent.isFIFO()
* returns true if the object a first in first out
* */


/*
* dirent.isFile()
* returns true of the object a file.
* */


/*
* dirent.isSocket()
* returns true if the object a socket.
* */


/*
* dirent.isSymbolicLink()
* return true if the object a symbolic link.
* */


//Class: fs.FSWatcher

