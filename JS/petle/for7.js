let numberStart = 2;
let numberStop = 15;
let sum = 0;
let arr = [];

for (i = numberStart; i < numberStop; i++) {
  if (i % 2 === 0) {
    arr.push(i);
    sum += i;
  }
}
console.log(arr);
console.log(sum);
