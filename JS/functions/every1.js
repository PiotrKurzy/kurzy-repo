const array = [12, 5, 8, 130, 44];
const array2 = [12, 54, 18, 130, 44];

const isBigEnough = array.every(function (element, index, array) {
  return element >= 10;
});
const isBigEnough2 = array2.every(function (element, index, array) {
  return element >= 10;
});
// [12, 5, 8, 130, 44].every(isBigEnough); // false
// [12, 54, 18, 130, 44].every(isBigEnough); // true

console.log(isBigEnough);
console.log(isBigEnough2);
