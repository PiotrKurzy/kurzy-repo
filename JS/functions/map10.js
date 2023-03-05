const array = ["Legolas", "Gimli", "Frodo", "Aragorn", "Sam"];
const newArray = array.map(function (item) {
  return item.length;
});
console.log(newArray);
