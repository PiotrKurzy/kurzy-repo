const arr = [1, 3, 3, 4];
const checkIfHasTwo = arr.some(function (item) {
  console.log(item);
  return item === 4;
});
console.log(checkIfHasTwo); // zwrócona zostanie wartość true
