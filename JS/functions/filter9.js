const produkty = [
  { name: "T-Shirt", price: 30 },
  { name: "Słuchawki", price: 125 },
  { name: "Gitara", price: 60 },
  { name: "Monitor LCD", price: 220 },
];

const newArray = produkty.filter((products) => products.price > 100);

const newArray2 = newArray.map(function (item) {
  return item.name;
});

// console.log(newArray);
console.log(newArray2);
