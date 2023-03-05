const newStr = "Hello people!";
const spreadedString = [...newStr];
console.log(spreadedString);
// [("H", "e", "l", "l", "o", " ", "p", "e", "o", "p", "l", "e", "!")];
//rozdzielanie tekstu na poszczególne litery
const str = "Kurs programowania";
const tab = [...str];
console.log(tab);
// wynik to ["K", "u", "r", "s", " ", "p", "r", "o", "g", "r", "a", "m", "o", "w", "a", "n", "i", "a"]

//jak użyć spread na tablicy aby rozbić jej elementy
const arr = [1, 2, 3, 4, 5, 6];
console.log(...arr); //1, 2, 3, 4, 5, 6
//kopiowanie tablicy
const arr2 = [...arr];
//łączenie tablic
const arr3 = [3, 4];
const newArr = [1, 2, ...arr3, 5, 6]; //1, 2, 3, 4, 5, 6
console.log(newArr);

const obj = {
  name: "Wacław",
  lastName: "Kowalski",
};
const person = {
  ...obj,
  age: 35,
};
console.log(person);
// Wynik to:
// {
// age: 35,
// lastName: "Kowalski",
// name: "Wacław"
// }
