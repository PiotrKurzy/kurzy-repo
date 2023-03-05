array = [
  { name: "klawiatura", price: 40 },
  { name: "mysz", price: 20 },
  { name: "procesor", price: 800 },
];
const newArray = array
  .map((item) => item.price)
  .reduce((acc, curr) => acc + curr);

console.log(newArray);
