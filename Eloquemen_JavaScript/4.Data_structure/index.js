const range = function (start, end, step = 1) {
  const arr = [];
  for (let i = start; i <= end; i = i + step) {
    arr.push(i);
  }
  return arr;
};

const sum = function (arr) {
  return arr.reduce((a, b) => a + b);
};

// console.log(sum(range(1, 20, 2)));

const reverseArray = function (array) {
  const arr = [];
  for (let i = 1; i <= array.length; i++) {
    arr[array.length - i] = array[i - 1];
  }
  return arr;
};

// console.log(reverseArray([2, 1, 3, 'he', 'llo']));

const reverseArrayInPlace = function (array) {
  for (let i = 1; i < array.length / 2; i++) {
    const firstIndex = i - 1;
    const lastIndex = array.length - i;

    [array[firstIndex], array[lastIndex]] = [array[lastIndex], array[firstIndex]];
  }
  return array;
};

// console.log(reverseArrayInPlace([2, 1, 3, 'he', 'llo']));

const arrayToList = function (array, i = 0) {
  if (i === array.length) {
    return null;
  }
  return { value: array[i], rest: arrayToList(array, i + 1) };
};

let list = arrayToList([1, 2, 10]);

// console.log(list);

const listToArray = function (list) {
  if (list.rest) {
    return [list.value, ...listToArray(list.rest)];
  }
  return [list.value];
};

// console.log(listToArray(list));

const prepend = function (element, list) {
  return { value: element, rest: list };
};

// console.log(prepend(7, list));

const nth = function (item, list) {
  if (item === 1) {
    return list.value;
  } else {
    return nth(item - 1, list.rest);
  }
};

// console.log(nth(3, list));

const deepEqual = function (firstValue, secondValue) {
  if (firstValue === secondValue) {
    return true;
  } else if (
    typeof firstValue === 'object' &&
    firstValue !== null &&
    typeof secondValue === 'object' &&
    secondValue !== null
  ) {
    let firstValueKeys = Object.keys(firstValue);
    let secondValueKeys = Object.keys(secondValue);

    if (firstValueKeys.length !== secondValueKeys.length) {
      return false;
    }

    for (let i = 0; i < firstValueKeys.length; i++) {
      if (secondValueKeys.includes(firstValueKeys[i]) && firstValue[firstValueKeys] === firstValue[secondValueKeys]) {
        return true;
      }
      const element = firstValueKeys[i];
    }
  } else {
    return false;
  }
};

console.log(deepEqual({ first: 1, sec: 2 }, { sec: 2, first: 1 }));
