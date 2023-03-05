const arr = [1, 2, 3];

const arr2 = [...arr, 4, 5, 6];
const arr3 = [4, 5, 6, ...arr];
const arr4 = [4, ...arr, 5, 6];

console.log(arr2);
console.log(arr3);
console.log(arr4);
