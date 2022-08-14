const generateTriangle = function (symbol, height) {
  for (let index = 1; index <= height; index++) {
    console.log(symbol.repeat(index));
  }
};

// generateTriangle('#', 5);

const generateTriangleEquilateral = function (symbol, height) {
  if (height % 2 === 0) {
    for (let index = 1; index <= height; index++) {
      console.log(' '.repeat(height - index) + symbol.repeat(index * 2));
    }
  } else {
    for (let index = 1; index <= height - 1; index++) {
      if (index === 1) {
        console.log(' '.repeat(height - 1) + symbol);
      }
      console.log(' '.repeat(height - index - 1) + symbol.repeat(index * 2 + 1));
    }
  }
};

// generateTriangleEquilateral('#', 5);

let fizzBuzz = function () {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

// fizzBuzz();

let chessBoard = function (size, symbol) {
  for (let i = 0; i < size; i++) {
    let sym = '';
    symbol.length === 1 ? (sym = symbol) : (sym = symbol[0]);

    if (i % 2 === 0) {
      console.log((' ' + sym).repeat(size / 2));
    } else {
      console.log((sym + ' ').repeat(size / 2));
    }
  }
};

chessBoard(8, '#dsadasdas');
