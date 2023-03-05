array = [1, 2, 3, 4];

const sumReduce = array.reduce((acc, curr) => acc + curr);

let sum = 0;
for (i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(`sumReduce:`, sumReduce);
console.log(`sumFor:`, sum);
