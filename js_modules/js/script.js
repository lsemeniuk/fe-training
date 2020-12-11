//Modules

export let one = 1;

let two = 2;
let three = 3;
export { two, three };

//Class
export class Person {
  constructor(name) {
    this.name = name
  }
}

//Function
export function sayHello() {
  console.log('hello!');
}

export { Person, sayHello }


//Rename
export { one as once, two as twice };

import { one, two } from './file.js'

// Rename import

import { one as num1, two as num2 } from './file.js';

// One Import
import *as numbers from './file.js';