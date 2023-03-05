const arrayOne = [1, 2, 3, 4, 5, 6];
const arrTwo = [1, 2, 7, 8, 9, 0];

const newArray = arrTwo.filter((numbers) => arrayOne.includes(numbers));
console.log(newArray);
