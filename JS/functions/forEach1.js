const array = [1, 2, 3, 4];
const forEachMethod = array.forEach(function (item) {
  return item + 1;
});
console.log(forEachMethod); // zwrócone zostaje "undefined"
console.log(array); // nienaruszona tablica [1,2,3,4]
const mapMethod = array.map(function (item) {
  return item + 1;
});
console.log(mapMethod); // zwrócone zostaje [2,3,4,5]
console.log(array); // nienaruszona tablica [1,2,3,4]
