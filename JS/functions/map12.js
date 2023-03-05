const array = [
  {
    name: `Andrzej`,
    age: 32,
  },
  {
    name: `Janek`,
    age: 23,
  },
  {
    name: `Witek`,
    age: 35,
  },
];
const newArray = array.map(function (item) {
  return `${item.name} jest w wieku ${item.age} lat`;
});
console.log("array: ", array);
console.log("newArray: ", newArray);
