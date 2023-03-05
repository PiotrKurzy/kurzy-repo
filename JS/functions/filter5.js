const children = [
  { name: "Grześ", age: 10 },
  { name: "Witek", age: 2 },
  { name: "Klara", age: 13 },
  { name: "Zuzia", age: 3 },
  { name: "Zosia", age: 6 },
  { name: "Feliks", age: 1 },
  { name: "Andrzej", age: 7 },
];
const newArray = children.filter((person) => person.age < 4);
console.log("children", children);
console.log("newArray", newArray);
