const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = array.filter(function (item) {
  return item % 2 === 0;
});
console.log("array", array); // Wynik to "array", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("newArray", newArray); // Wynik to "newArray", [2, 4, 6, 8, 10]
