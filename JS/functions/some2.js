const age = [4, 5, 6, 7, 23, 20];
const check = age.some(function (item) {
  console.log(item);
  return item > 20;
});
console.log(check);
