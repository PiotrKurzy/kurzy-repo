const arr = [
  {
    name: "Andrzej",
    age: 30,
    profession: "lekarz",
  },
  {
    firstName: "Wiesiek",
    age: 60,
    profession: "piekarz",
  },
];

for (let person of arr) {
  for (let key in person) {
    if (key === "firstName") console.log("true");
  }
}
