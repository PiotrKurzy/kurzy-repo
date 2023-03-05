const group = [
  {
    Name: "Jenna",
    Points: 99,
  },
  {
    Name: "Adam",
    Points: 92,
  },
  {
    Name: "Alojzy",
    Points: 47,
  },
  {
    Name: "John",
    Points: 78,
  },
  {
    Name: "Peter",
    Points: 68,
  },
  {
    Name: "Alieksij",
    Points: 56,
  },
];

const sumOfPoints = group
  .map((persons) => persons.Points)
  .reduce((acc, curr) => acc + curr);

console.log(sumOfPoints);
