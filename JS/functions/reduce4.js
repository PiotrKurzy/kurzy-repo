array = [10, 11, 12, 13];

const sum = array.reduce((acc, curr, index) => {
  console.log(`akumulator przy ${index}-iteracji`, acc);
  return acc + curr;
}, 10);
console.log(sum);
