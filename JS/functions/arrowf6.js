const deleteDigit = ([a, b, c, d, e], x, y) => {
  let array = [a, b, c, d, e];

  array[y] = x;

  return array;
};

let res = deleteDigit([3, 4, 5, 6, 7], 100, 4);
console.log(res);
