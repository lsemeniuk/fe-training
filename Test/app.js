// // Задачи из собеседования

// // Написать функцию, которая будет возвращать масив индексов двух чисел из массива, сумма которых равна числу, что идёт после массива.
// // Возможности использовать emmet нет, поэтому весь функционал нужно писать в блокноте.

// // (function (arr, equation) {
// //   func...
// // })([2, 7, 11, 14, 1, 9, 10], 9);

// (function (arr, equation) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let n = 0; n < arr.length; n++) {
//       let num = 0;
//       num = arr[i] + arr[n];
//       if (num === equation && i !== n) {
//         return [i, n];
//       }
//     }
//   }
// })([2, 11, 14, 7, 1, 9, 10], 9);

// // На понимание вызова функции

// // function a() {
// //   let b = 0;

// //   return () => {
// //     b++;

// //     console.log(b);
// //   };
// // }

// // Функция оболочка с распространением ...Rest

// function timed(f) {
//   return function (...args) {
//     console.log(`Вход в функцию ${f.name}`);
//     let startTime = Date.now();
//     try {
//       return f(...args);
//     } finally {
//       console.log(`Выход из ${f.name} спустя ${Date.now() - startTime} мс`);
//     }
//   };
// }

// function benchmark(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) sum += i;
//   console.log(sum);
//   return sum;
// }

// // timed(benchmark)(100);

// // Функция копирования массива

// function arrayCopy({ from, to = from, n = from.length, fromIndex = 0, toIndex = 0 }) {
//   let valuesToCopy = from.slice(fromIndex, fromIndex + n);
//   to.splice(toIndex, 0, ...valuesToCopy);
//   console.log(to);
//   return to;
// }

// // let a = [1, 2, 3, 3, 2];
// // let b = [9, 8];

// // arrayCopy({ from: a, n: 0, to: b, toIndex: 2 });

// // Задачи https://tproger.ru/

// // Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.

// // Входной массив

// let sumSqrtEven = [1, 4, 3, 0, 4, 5, 4];

// // Оставляем только чётные числа
// sumSqrtEven
//   .filter(element => !(element % 2))
//   // Считаем квадратный корень и записываем в аккумулятор
//   .reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0);

// // Задача на оприделение валидности скобок например ({(){}}) - валидно

// let s1 = '()';
// let s2 = '(){}[]';
// let s3 = '(}';
// let s4 = '({}){()[]}';

// function isValid(s) {
//   let stack = [];
//   let bracket = {
//     ')': '(',
//     '}': '{',
//     ']': '[',
//   };

//   for (let i = 0; i < s.length; i++) {
//     let current = s[i];

//     if (isClosedBracket[current]) {
//       if (bracket[current] !== stack.pop()) return false;
//     } else {
//       stack.push(current);
//     }
//   }

//   return stack.length === 0;
// }

// function isClosedBracket(ch) {
//   return [')', '}', ']'].indexOf(ch) > -1;
// }
