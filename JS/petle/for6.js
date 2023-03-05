const num = 10;
let arr = [];

for (i = 0; i <= num; i++) {
  if (num % i === 0) {
    arr.push(i);
  }
}

console.log(arr);
