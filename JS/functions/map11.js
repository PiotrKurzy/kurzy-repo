const array = [-20, -7, 0, 5, 12, 34, 56];
const newArray = array.map(function (item) {
  return 32 + (9 / 5) * item;
});
console.log("Temperatura Celsjusz: ", array);
console.log("Temperatura Fahrenheit: ", newArray);
