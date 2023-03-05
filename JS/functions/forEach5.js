const numbers = [12, 9, 43, 59];

let sum = [];
let x = 0;
const sumOfNumbers = numbers.forEach(function (item) {
  x += item;
  sum.push(x);
  console.log(sum);
});
console.log(`suma :`, sum[sum.length - 1]);
