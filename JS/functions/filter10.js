const cities = [
  {
    name: `Warszawa`,
    population: 1794166,
  },
  {
    name: `Kraków`,
    population: 779966,
  },
  {
    name: `Łódź`,
    population: 672185,
  },
  {
    name: `Wrocław`,
    population: 641928,
  },
  {
    name: `Poznań`,
    population: 532048,
  },
];

const newArray = cities.filter((cities) => cities.population < 700000);
const citiesSort = newArray.reverse();
const citiesInfo = citiesSort.map(function (info) {
  return console.log(`${info.name}: ${info.population}`);
});
