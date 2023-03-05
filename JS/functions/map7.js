const array = [0, 1, 2, 3, 4];
const newArray = array.map(function (item) {
  return array.indexOf(item) + item;
});
console.log(newArray);
