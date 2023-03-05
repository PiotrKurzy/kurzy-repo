let x = 0;
let sum = 0;

function countSum(y) {
  while (x < y) {
    x++;
    sum += x;
  }
  console.log(`suma: `, sum);
}
countSum(2);
