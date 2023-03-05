array = [
  { name: "Fifi", behavior: 2, average: 5 },
  { name: "Jacuś", behavior: 5, average: 4 },
];

const newArray = array
  .map((item) => item)
  .filter((person) => person.behavior >= 4 && person.average >= 4);

console.log(newArray);
