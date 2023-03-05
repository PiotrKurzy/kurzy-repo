const zwyciezcy = ["Kamil Stoch", "Piotr Żyła", "Dawid Kubacki"];
const newArray = zwyciezcy.filter(function (person) {
  return person;
});

// console.log(newArray);
console.log("Gold - " + newArray[0]);
console.log("Silver - " + newArray[1]);
console.log("Bronze - " + newArray[2]);
