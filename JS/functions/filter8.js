const array = [0, 1, "Marek", 3, "symfonia", null];

const newArray = array.filter(
  (item) => (item !== null && item / 1 >= 0) || item / 1 < 0
);

console.log(newArray);
