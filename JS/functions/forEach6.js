const numbers = [1, 2, 3, 4];
let lenght = numbers.length;
let x = 0;
const newNumbers = numbers.forEach(function (item) {
  x = item * 20;
  numbers.push(x);
});
numbers.splice(0, lenght);
console.log(numbers);
