const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray = array.filter(function (item) {
  return item % 2 !== 0;
});
console.log("array", array);
console.log("newArray", newArray);
