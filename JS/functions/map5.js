const array = [5, 10, 15];
const newArray = array.map(function (item) {
  return item + 5;
});
console.log("array", array); // Wynik to "array", [1, 2, 3, 4, 5]
console.log("newArray", newArray); // Wynik to "newArray", [2, 4, 6, 8, 10]
