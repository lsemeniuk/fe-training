// const crypto = require('crypto');
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
// const dotenv = require('dotenv');
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
// const path = require('path');
// console.log(path.join(__dirname, 'first', 'second')); - склеїти шляхи
// console.log(path.join(__dirname, '..', '..')); - повернутись на дві папки назад
// console.log(path.resolve('first', 'second'));
// const fullPath = path.resolve('first', 'second.js');
// console.log('Парсинг шляху', path.parse(fullPath));
// console.log('Розділювач в ОС', path.sep);
// console.log('Перевірити на абсолютний шлях', path.isAbsolute(fullPath));
// console.log('Назва файлу', path.basename(fullPath));
// console.log('Розширення файлу', path.extname(fullPath));

// const siteURL = 'http://localhost:8000/users?id=5455';
// const url = new URL(siteURL);
// console.log(url);

//FILE SYSTEM
const fs = require('fs');
const path = require('path');

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

// const writeFileAsync = async (path, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(path, data, (err) => {
//       if (err) {
//         return reject(err.message)
//       }
//       resolve()
//     })
//   })
// }

// const appendFileAsync = async (path, data) => {
//   return new Promise((resolve, reject) => {
//     fs.appendFile(path, data, (err) => {
//       if (err) {
//         return reject(err.message)
//       }
//       resolve()
//     })
//   })
// }

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

readFileAsync(path.resolve(__dirname, 'test.txt'))
  .then(data => console.log(data))
  .catch(err => console.log(err));

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

removeFileAsync(path.resolve(__dirname, 'test.txt'))
  .then(() => console.log('file removed'))
  .catch(err => console.log(err));
