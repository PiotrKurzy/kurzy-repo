const items = [
  { id: 1, name: "Mega Burger", price: 39, available: true },
  { id: 2, name: "Mega Frytki", price: 20, available: true },
  { id: 3, name: "Coca cola", price: 10, available: false },
];

const checkAvailable = items.find(function (item) {
  return item.available === false;
});

console.log(
  `Przepraszamy, ale produkt - ${checkAvailable.name}, jest aktualnie niedostępny.`
);

// const checkAvailable2 = items.map(function (item) {
//   // console.log(item);
//   if (item.available === false) return item.name;
//   return `O.K.`;
// });

// console.log(`Produkt niedostępny :`, checkAvailable2);
