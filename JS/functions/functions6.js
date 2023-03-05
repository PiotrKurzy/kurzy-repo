function addingToArray([a, b, c], d) {
  let array = [a, b, c];
  let x = 0;

  for (i = 0; i < array.length; i++) {
    if (array[i] == d) {
      x = 1;
    }
  }
  if (x != 1) array.push(d);
  return array;
}

let res = addingToArray([1, 2, 3], 2);

console.log(res);
