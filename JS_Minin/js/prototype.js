// const person = {
//   name: 'Leonid',
//   age: 26,
//   greet: function () {
//     console.log('Greet')
//   }
// }

const person = new Object({
  name: 'Leonid',
  age: 26,
  greet: function () {
    console.log('Greet')
  }
})

Object.prototype.sayHello = function () {
  console.log('Hello!');
}

const lena = Object.create(person)
lena.name = 'Lena'

const str = 'I am string'

const hello = 'hello'