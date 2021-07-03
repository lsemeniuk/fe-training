// //Modules

// export let one = 1;

// let two = 2;
// let three = 3;
// export { two, three };

// //Class
// import { summ } from './11/file.js';

// summ(1, 3);

// summ(53, 3);
const testCustomer = {
  firstName: 'Customer',
  // lastName: 'Newone',
  // login: 'Customer',
  // email: 'customer@gmail.com',
  // password: '1111111',
  // telephone: '+380630000000',
  // gender: 'male',
  // avatarUrl: 'img/customers/023648.png',
  // isAdmin: true,
};

// const test = testCustomer.getOwnPropertyNames();

var options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};

console.log(new Date('2021-04-26T09:15:00.874Z').toLocaleString('ru', options));
