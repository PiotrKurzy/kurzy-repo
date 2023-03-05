const arr1 = [1, 2, 3, 4];
function arrayClone(a, b, c) {
  return [a, b, c];
}

let res = arrayClone(...arr1);
console.log(res);
