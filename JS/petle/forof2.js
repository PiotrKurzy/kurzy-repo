const films = [
  {
    title: "The Hobbit: An Unexpected Journey",
    director: "Peter Jackson",
    watched: "true",
  },
  {
    title: "THOR: RAGNAROK",
    director: "Taika Waititi",
    watched: true,
  },
  {
    title: "The Batman",
    director: "Matt Reeves",
    watched: false,
  },
];

// for (let items of films) {
for (let number in films) {
  console.log(`The ${number} fastest car is ${films[number]}`);
}

// if (item[key] === true) {
//   console.log("Already watched ${number} by Peter Jackson");
// } else if (item[key] === false)
//   console.log("You still need to watch 'The Batman' by Matt Reeves.");
// console.log(item);

// const fastestCars = {
//   first: "Fiat 126p",
//   second: "Lamborghini Urus",
//   third: "Ferrari Enzo",
// };
// for (let number in fastestCars) {
// console.log(`The ${number} fastest car is ${fastestCars[number]}`);
// }
