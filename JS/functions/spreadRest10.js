const sum = [1, 2, 3, 4, 5, 6, 10];
let x = 0;

function sumOfNumbers(a, b, ...rest) {
  for (i = 0; i < rest.length; i++) {
    x += rest[i];
  }
  return a + b + x;
}
let res = sumOfNumbers(...sum);
console.log("Suma cyfr : ", res);
