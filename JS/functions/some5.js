const pracownicy = [
  { name: "Jake Bale", age: 30 },
  { name: "Adam Smith", age: 23 },
  { name: "Gordon Sheridon", age: 56 },
  { name: "Valley Balley", age: 78 },
];
let x = 0;
const check = pracownicy.some(function (worker) {
  console.log(worker.name);
  x = pracownicy.indexOf(worker);
  return worker.name === `Gordon Sheridon`;
});
console.log(check, x);
