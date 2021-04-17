const crypto = require('crypto');
const fs = require('fs');
const stream = require('stream');
const assert = require('assert');

/*
* Предоставляет криптографические функции включающие в себя установку обёрток для OpenSSL hash, HMAC,
* cipher, decipher, sign и защищенные функции
* */
// const secretWord = 'top_secret';
// const hash = crypto.createHmac('sha256', secretWord)
//     .update('Hi')
//     .digest('hex');
// console.log(hash)
// 644bf3e67e05b3848729c3c20ae2d2d8a24be19cb6144406fb6dcfbc937319c1


/*
* Certificate
* SPKAC сертификат включает механизм запроса на подпись сертификата
* */


/*
* Class: Cipher
* используется для криптографии данных. Класс может использоваться в двух случаях:
* 1. Потоки чтения и записи, где простые незашифрованные данные.
* 2. Использование с cipher.update() и cipher.final() методы для шифрования данных.
* */
// const algorithm = 'aes-192-cbc';
// const password = 'Password used to generate key';
//
// crypto.scrypt(password, 'salt', 24, (err, key) => {
//    if (err) throw err;
//    crypto.randomFill(new Uint8Array(16), (err, iv) => {
//        if (err) throw err;
//        const cipher = crypto.createCipheriv(algorithm, key, iv);
//        let encrypted = '';
//        cipher.setEncoding('hex');
//        cipher.on('data', chunk => encrypted += chunk);
//        cipher.on('end', () => console.log(encrypted)); // cf3da2c7a891c7dd433c40cbdc555a62
//
//        cipher.write('text data');
//        cipher.end();
//    });
// });

// Использовать с потоками труб
// const algorithm = 'aes-192-cbc';
// const password = 'Password used to generate key';
// crypto.scrypt(password, 'salt', 24, (err, key) => {
//    if (err) throw err;
//    crypto.randomFill(new Uint8Array(16), (err, iv) => {
//        if (err) throw err;
//        const cipher = crypto.createCipheriv(algorithm, key, iv);
//
//        const input = fs.createReadStream('index.js');
//        const output = fs.createWriteStream('test.enc');
//
//        stream.pipeline(input, cipher, output, err => {
//           if (err) throw err;
//        });
//    });
// });


/*
* cipher.final([outputEncoding])
* outputEncoding - кодировка возвращаемого значения
* Буфер зашифрованного значения
* */
// const algorithm = 'aes-192-cbc';
// const password = 'Password used to generate key';
// const key = crypto.scryptSync(password, 'salt', 24);
// const iv = Buffer.alloc(16, 0);
// const cipher = crypto.createCipheriv(algorithm, key, iv);
//
// let value = cipher.final('hex');
//
// console.log("buffer :- " + value); // buffer :- b9be42878310d599e4e49e040d1badb9


/*
* cipher.getAuthTag()
* Когда используется режим аутентифицированного шифрования (GCM, CCM, OCB) текущий метод возвращает Buffer
* включающий аутентификационный тэг, который рассчитан на основе принятых данных.
* */


/*
* cipher.setAAD(buffer[, options])
* Для связывания методов Cipher
* Когда используется режим аутентификационного шифрования, метод устанавливает используемое значение
* для дополнительного аутентификационного значения входного параметра
* */


/*
* cipher.setAutoPadding([autoPadding])
* Когда используется алгоритмы шифрования, Cipher класс будет автоматически добавит отступы для входящих данных
* для подходящих размеров блока.
* */


/*
* cipher.update(data[, inputEncoding][, outputEncoding])
* обновляет шифр с данными
* */


/*
* Class: Decipher
* Расшифровка
* Используется для расшифровки данных.
* */


/*
* Class: DiffieHellman
* Программа для обмена ключами Diffie-Hellman
* */
// const alice = crypto.createDiffieHellman(2048);
// const aliceKey = alice.generateKeys();
// console.log('aliceKey', aliceKey)
//
// // Generate Bob's keys...
// const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator());
// const bobKey = bob.generateKeys();
// console.log('bobKey', bobKey)
//
// // Exchange and generate the secret...
// const aliceSecret = alice.computeSecret(bobKey);
// const bobSecret = bob.computeSecret(aliceKey);
// console.log('bobSecret', bobSecret)
//
// // OK
// console.log('aliceSecret', aliceSecret.toString('hex'))
// console.log('bobSecret', bobSecret.toString('hex'))
// assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));


/*
* diffieHellman.computeSecret(otherPublicKey[, inputEncoding][, outputEncoding])
* Вычисляет общий секрет, используя otherPublicKey и возвращает вычисленный общий секрет.
* */


/*
* diffieHellman.generateKeys([encoding])
* Генерирует скрытый и публичный Diffie-Hellman значение ключа и возвращает публичный ключ в указанной кодировке.
* */


/*
* diffieHellman.getGenerator([encoding])
* Возвращает Diffie-Hellman генератор в указанной кодировке.
* */


/*
* diffieHellman.getPrime([encoding])
* Возвращает основу Diffie-Hellman в указанной кодировке.
* */


/*
* diffieHellman.getPrivateKey([encoding])
* diffieHellman.getPublicKey([encoding])
* Возвращает ключ в указанной кодировке.
* */


/*
* diffieHellman.setPrivateKey(privateKey[, encoding])
* diffieHellman.setPublicKey(publicKey[, encoding])
* Устанавливает ключ.
* */


/*
* Class: DiffieHellmanGroup
* Включает в себя modp группу, а в остальном работает как и DiffieHellman
* */


/*
* Class: ECDH
* Утилитла для создания Эллиптическая кривая Диффи-Хеллмана обмена ключей.
* */


/*
* Class: Hash
* Используется для создания хеш данных. Может использоваться в двух случаях:
* 1. Как поток для чтения и записи, где данные записываются для создания вычисленного хеш на читаемой стороне
* 2. hash.update(), hash.digest()
* */
// const hash = crypto.createHash('sha256');
// hash.on("readable", () => {
//    const data = hash.read();
//    if (data) {
//        console.log(data.toString('hex')); // 1307990e6ba5ca145eb35e99182a9bec46531bc54ddf656a602c780fa0240dee
//    }
// });
// hash.write('some data');
// hash.end();


// Потоки
// const hash = crypto.createHash('sha256');
//
// const input = fs.createReadStream('index.js');
// input.pipe(hash).setEncoding('hex').pipe(process.stdout);


// hash.update(), hash.digest()
// const hash = crypto.createHash('sha256');
// hash.update('some data');
// console.log(hash.digest('hex')); // 1307990e6ba5ca145eb35e99182a9bec46531bc54ddf656a602c780fa0240dee


/*
* hash.copy([options])
* Создаёт новый хеш объект, который включает глубокую копию состояния объекта.
* */
// const hash = crypto.createHash('sha256');
// hash.update('one');
// console.log(hash.copy().digest('hex'));


/*
* hash.digest([encoding])
* Вычисляет все данные для хеширования.
* */


/*
* hash.update(data[, inputEncoding])
* Обновляет хеш данные с новыми данными.
* */


/*
* Class: Hmac
* */
