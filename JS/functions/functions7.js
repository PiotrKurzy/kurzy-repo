function addingToArrays([a, b, c, d, e, f]) {
  let array = [a, b, c, d, e, f];
  let arrayEven = [];
  let arrayOdd = [];

  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      arrayEven.push(array[i]);
    } else {
      arrayOdd.push(array[i]);
    }
  }

  return { arrayOdd, arrayEven };
}

let res = addingToArrays([1, 3, 3, 101, 11, 76]);

console.log(res);
