const deleteDigit = ([a, b, c], d) => {
  let array = [a, b, c];

  for (i = 0; i < array.length; i++) {
    if (array[i] == d) {
      array.splice(i, 1);
    }
  }
  return array;
};

let res = deleteDigit([0, 7, 3], 7);
console.log(res);
