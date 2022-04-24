const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const os = require('os');
const cluster = require('cluster');
const Emitter = require('events');

// const start = Date.now();
// crypto.pbkdf2('123ddd', '5', 1000000, 64, 'sha512', () => {
//   console.log('1 end', Date.now() - start);
// });
// crypto.pbkdf2('123ddd', '5', 1000000, 64, 'sha512', () => {
//   console.log('2 end', Date.now() - start);
// });
// crypto.pbkdf2('123ddd', '5', 1000000, 64, 'sha512', () => {
//   console.log('3 end', Date.now() - start);
// });
// crypto.pbkdf2('123ddd', '5', 1000000, 64, 'sha512', () => {
//   console.log('4 end', Date.now() - start);
// });
// crypto.pbkdf2('123ddd', '5', 1000000, 64, 'sha512', () => {
//   console.log('5 end', Date.now() - start);
// });

//PROCESS
// console.log(process.pid);
// dotenv.config();
// console.log(process.env.PORT);
// console.log(process.env.NODE_ENV);
// console.log(process.argv);
// if (Math.random() > 0.5) {
//   while (true) {}
// } else {
//   console.log('Виконання програми закінчено');
//   process.exit();
// }

//PATH
// console.log(path.join(__dirname, 'first', 'second')); //- склеїти шляхи
// console.log(path.join(__dirname, '..', '..')); //- повернутись на дві папки назад
// console.log(path.resolve('first', 'second')); //- видає абсолютний шлях
const fullPath = path.resolve('first', 'second.js');
// console.log("Парсинг шляху в об'єкт", path.parse(fullPath));
// console.log('Розділювач в ОС', path.sep);
// console.log('Перевірити на абсолютний шлях', path.isAbsolute(fullPath));
// console.log('Назва файлу', path.basename(fullPath));
// console.log('Розширення файлу', path.extname(fullPath));

// const siteURL = 'http://localhost:8000/users?id=5455';
// const url = new URL(siteURL);
// console.log(url);

//FILE SYSTEM

// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), { recursive: true });

// console.log('START');

// fs.mkdir(path.resolve(__dirname, 'dir'), err => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('Папку створено');
// });

// console.log('END');

// fs.rmdir(path.resolve(__dirname, 'dir'), err => {
//   if (err) {
//     throw err;
//   }
// });

// fs.writeFile(path.resolve(__dirname, 'test.txt'), '321вфівф asdasb', err => {
//   if (err) {
//     throw err;
//   }
//   console.log('Файл створений та записаний');
//   fs.appendFile(path.resolve(__dirname, 'test.txt'), ' В кінець', err => {
//     if (err) {
//       throw err;
//     }
//     console.log('Файл записаний');
//   });
// });

//FILE SYSTEM PROMISES

const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, err => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    });
  });
};

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(path, data, err => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    });
  });
};

// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data ')
//   .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), 'onea sad '))
//   .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), 'two'))
//   .catch(err => console.log(err))

const readFileAsync = async path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return reject(err.message);
      }
      resolve(data);
    });
  });
};

// readFileAsync(path.resolve(__dirname, 'test.txt'))
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

const removeFileAsync = async path => {
  return new Promise((resolve, reject) => {
    fs.rm(path, err => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    });
  });
};

// removeFileAsync(path.resolve(__dirname, 'test.txt'))
//   .then(() => console.log('file removed'))
//   .catch(err => console.log(err));

// Через переменную окружения передать строку, записать ее в файл
// прочитать файл, посчитать кол-во слов в файле и записать
// их в новый файл count.txt, затем удалить первый файл

// const text = process.env.TEXT || '';

// writeFileAsync(path.resolve(__dirname, 'file.txt'), text)
//   .then(() => readFileAsync(path.resolve(__dirname, 'file.txt')))
//   .then(data => data.split(' ').length)
//   .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Кол-во слов ${count}`))
//   .then(() => removeFileAsync(path.resolve(__dirname, 'file.txt')))
//   .catch(err => console.log(err));

// console.log(process.env.TEXT);

// Операционная система

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

// if (cluster.isMaster) {
//   for (let i = 0; i < os.cpus().length - 2; i++) {
//     cluster.fork();
//   }
//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Воркер с pid=${worker.process.pid} умер`);
//     if (code === 222) {
//       cluster.fork();
//     } else {
//       console.log('Воркер умер...');
//     }
//   });
// } else {
//   console.log(`Воркер с pid=${process.pid} запущен`);
//   setInterval(() => {
//     console.log(`Воркер с pid=${process.pid} еще работает`);
//   }, 5000);
// }

// Events

// const emitter = new Emitter();

// const callback = (data, second, third) => {
//   console.log(`Вы прислали сообщение ${data}`);
//   console.log(`Второй аргумент ${second}`);
// };

// emitter.on('message', callback);

// emitter.once('message', (data, second, third) => {
// генерує подію тільки один раз
// });

// const MESSAGE = process.env.message || '';

// if (MESSAGE) {
//   emitter.emit('message', MESSAGE, 123);
// } else {
//   emitter.emit('message', 'Вы не указали сообщение', 123);
// }

// emitter.removeAllListeners(); видаляє всі лістенери
// emitter.removeListener('message', callback); видаляє один лістенер

// STREAM

// Readable - читання
// Writable - запис
// Duplex - для читання і запису Readable + Writable
// Transform - такий як Duplex, але може змінювати данні по мірі читання

// Створив файл тестовий:
// readFileAsync(path.resolve(__dirname, 'test.txt'))
//   .then(data => {
//     appendFileAsync(path.resolve(__dirname, 'test.txt'), data).catch(err => console.log(err));
//     console.log(data.length * 2);
//   })
//   .catch(err => console.log(err));

// Прочитали файл весь за раз:
// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// });

// const readStream = fs.createReadStream(path.resolve(__dirname, 'test.txt'), { encoding: 'utf-8' });

// Один чанк по дефолту 64кб
// readStream.on('data', chunk => {
//   console.log(chunk.length);
// });

// readStream.on('end', () => {
//   console.log('Закінчили зчитування');
// });

// readStream.on('open', () => {
//   console.log('Почали зчитування');
// });

// readStream.on('error', e => {
//   console.log(e);
// });

// const writeStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'));

// for (let i = 0; i < 20; i++) {
//   writeStream.write(i + '\n');
// }

// writeStream.end();
// writeStream.close();
// writeStream.destroy();
// writeStream.on('error', e => {
//   console.log(e);
// });

// const http = require('http');

// http.createServer((req, res) => {
//   //req - readable stream
//   //res - writable stream
//   const readStream = fs.createReadStream(path.resolve(__dirname, 'test.txt'));

//   readStream.pipe(res);
//   readStream.on('data', chunk => res.write(chunk));
//   readStream.on('end', chunk => res.write(chunk));
// });
