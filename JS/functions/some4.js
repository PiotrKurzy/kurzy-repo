const zolnierze = [
  { id: 45, name: "Jan Kowalski", pilot: false },
  { id: 78, name: "Czesław Mikulski", pilot: true },
  { id: 12, name: "Waldemar Śmigły", pilot: false },
  { id: 123, name: "Chuck Helikopter", pilot: false },
];

const check = zolnierze.some(function (person) {
  console.log(person.name);
  return person.pilot === true;
});
console.log(check);
