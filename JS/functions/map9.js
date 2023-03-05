const array = [10, 7, 45, -34, 23, -5];
const newArray = array.map(function (item) {
  if (item >= 10) return `True`;
  return `False`;
});
console.log(newArray);
