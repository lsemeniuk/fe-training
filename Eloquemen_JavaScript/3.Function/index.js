const minimum = function (first, second) {
  if (first < second) {
    return first;
  } else {
    return second;
  }
};

// console.log(minimum(12, 6));

const isEven = function (number) {
  if (number === 0) {
    return true;
  } else if (number === 1) {
    return false;
  } else {
    return number > 0 ? isEven(number - 2) : isEven(number + 2);
  }
};

// console.log(isEven(5));

const countBs = function (str, symbol) {
  let acumulate = 0;
  for (let i = 0; i < str.length; i++) {
    const currentSymbol = str[i];
    currentSymbol === symbol && acumulate++;
  }
  return acumulate;
};

// console.log(countBs('Band of Lord', 'L'));
