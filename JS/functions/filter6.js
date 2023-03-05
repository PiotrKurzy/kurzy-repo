const workers = [
  { name: "Atanazy", proffesion: "kucharz" },
  { name: "Mariusz", proffesion: "developer" },
  { name: "Klara", proffesion: "fryzjerka" },
  { name: "Zuzia", proffesion: "developer" },
  { name: "Zosia", proffesion: "graphic designer" },
  { name: "Feliks", proffesion: "project manager" },
  { name: "Andrzej", proffesion: "developer" },
];
const newArray = workers.filter((person) => person.proffesion !== "developer");
console.log("workers", workers);
console.log("newArray", newArray);
