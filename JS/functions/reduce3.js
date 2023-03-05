array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = array
  .filter((number) => number % 2 !== 0)
  .reduce(function (acc, curr) {
    return acc + curr;
  });
console.log(sum);
