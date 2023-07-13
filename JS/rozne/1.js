// let array = ["5", 35, true, "red", {}];
// Parametry = [];
// array.map(function (item) {
//   Parametry.push(typeof item);
//   Parametry.map(function (item) {
//     if (item === `string`) Parametry[Parametry.indexOf(item)] = "";
//   });
// });
// console.log(Parametry);

// function check(array) {}

// array = [
//   { name: "Gabriel", points: { play1: 2, play2: 5, play3: 2 } },
//   { name: "Felix", points: { play1: 4, play2: 5, play3: 1 } },
// ];
// Parametry = [];
// array.map(function (item) {
//   Parametry.push(
//     `${item.name} got ${
//       item.points.play1 + item.points.play2 + item.points.play3
//     } points`
//   );
// });
// console.log(Parametry);

// array = [
//   { name: "John", grade: 5 },
//   { name: "Sally", grade: 4 },
//   { name: "Patrick", grade: 5 },
// ];

// Parametry = [];
// array.map(function (item, index) {
//   Parametry.push(
//     `Congratulations ${item.name}, you have passed exam with grade: ${item.grade}, diploma number: ${index}`
//   );
// });
// console.log(Parametry);

// array = ["lorem ipsum dolor si amet", "lorem"];
// let x = 12;
// Parametry = [];
// array.map(function (item) {
//   if (item.length > 12) {
//     Parametry.push(
//       `The review exceeded the character limit by ${item.length - x} characters`
//     );
//   } else Parametry.push(`Review within limit`);
// });
// console.log(Parametry);

// for (const [key, value] of Object.entries(array)) {
//   // console.log(value);
//   let x = value;
//   for (const [key, value] of Object.entries(x)) {
//     console.log(`Congratulations ${key}, you have passed with grade: ${key}`);
//     // console.log(`key`, key);
//     // console.log(`value`, value);
//     if (value === true) {
//       // console.log(array.indexOf(x));
//       // console.log(`key`, key);
//       // console.log(`value`, value);
//     }
//   }
// }

// arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// for (i = 0; i < arr.length; i++) {
//   if (i % 2 === 0) {
//     arr[i] = arr[i] * 2;
//   }
// }
// for (j = 0; j < arr.length; j++) {
//   if (j % 3 === 0) {
//     arr[j] = arr[j] * 3;
//   }
// }
// console.log(arr);

// array = [
//   { name: "mirek", age: 17 },
//   { name: "damian", age: 30 },
// ];
// function check(x) {
//   let Parametry = [];
//   for (item of array) {
//     Parametry.push(item);
//     if (item.age >= 18) {
//       item.drivingLicense = true;
//     }
//   }
//   return Parametry;
// }
// let res = check(array);
// console.log(res);
// array = [
//   [2, 2],
//   [3, 1],
//   [0, 2],
//   [5, 0],
// ];
// function addValues(x) {
//   let sum = 0;
//   for (i = 0; i < array.length; i++) {
//     for (j = 0; j < array[i].length; j++) {
// //       if (array[i][j] > 1) {
// //         sum += array[i][j];
// //       }
// //     }
// //   }
// //   return sum;
// // }
// // let res = addValues(array);
// // console.log(res);

// let array = [
//   { name: "Janek", examPassed: true, grade: 5 },
//   { name: "Daria", examPassed: false, grade: null },
//   { name: "Marcin", examPassed: true, grade: 2 },
// ];
// function notification(array) {
//   let array2 = [];
//   let Parametry = [];
//   for (let [key, value] of Object.entries(array)) {
//     let x = value;
//     for (let [key, value] of Object.entries(x)) {
//       if (value === true) {
//         array2.push(array[array.indexOf(x)]);
//       }
//     }
//   }
//   array2.map(function (item) {
//     Parametry.push(
//       `Congratulations ${item.name}, you have passed with grade: ${item.grade}`
//     );
//   });

//   return Parametry;
// }
// let res = notification(array);
// console.log(`res`, res);

// const arr = [1, 2, 3, 4, 5, 6];
// function iterate(x) {
//   if (x >= arr.length) return;
//   console.log(arr[x]);
//   iterate(x + 1);
// }
// iterate(0);

// function Person(name, surname, age) {
//   (this.name = name), (this.surname = surname), (this.age = age);
// }

// let person1 = new Person("Andrzej", "Tyczka", 28);
// let person2 = new Person("Beata", "Wielgóra", 45);
// let person3 = [new Person("Krzysztof", "Zasada", 63)].forEach((element) => {
//   let x;
//   x = [{ ...element }];
//   console.log(`x`, x);

//console.log(person1, person2, person3);

// x.forEach((item) => {
// console.log(`item`, item);
// });
// console.log(`element`, [{ ...element }]);
// });

// function Person(name, surname) {
//   (this.name = name), (this.surname = surname);
// }
// Person.prototype.age = 25;
// let person1 = new Person("Andrzej", "Tyczka");
// let person2 = new Person("Beata", "Wielgóra");
// console.log(person1.age);
// console.log(person2.age);

// function Person(name, surname) {
//   (this.name = name), (this.surname = surname);
// }
// Person.prototype.pet = "dog";
// let person1 = new Person("Andrzej", "Tyczka");
// let person2 = new Person("Beata", "Wielgóra");
// Person.prototype = { pet: "cat" }; //tutaj dzieje się magia!
// let person3 = new Person("Aga", "Dębska");
// console.log(person1.pet); // "dog"
// console.log(person2.pet); // "dog"
// console.log(person3.pet); // "cat"

// let myObj = {
//   name: "John",
//   aaa: "dupa",
//   sayName: function () {
//     console.log(this.aaa);
//   },
// };
// myObj.sayName();

// function Person(name) {
//   this.name = name;
// }
// let john = new Person("John");
// console.log(john.name); // Wynik: "John"

// let plate = {
//   firstDish: "kiełbaska",
//   secondDish: "jajko",
//   getDish: function () {
//     console.log(this);
//   },
// };
// plate.getDish();

// let plate = {
//   firstDish: "kiełbaska",
//   secondDish: "jajko",
//   getDish: () => console.log(this),
// };
// plate.getDish();

// const person = { name: "Marcin" };
// const person1 = { name: "Kuba" };

// function sayHi() {
//   console.log(this.name);
// }
// /* console.log(sayHi()); */
// person1.sayHello = sayHi;

// person1.sayHello(); // lub person['sayHello']()

// const poeple = [
//   {
//     firstName: "Kasia",
//     lastName: "Kowalska",
//     nickname: "Kate",
//   },
//   {
//     firstName: "Anna",
//     lastName: "Piwowarczyk",
//     nickname: "Ciemnowłosa",
//   },
// ];

// const newPeople = poeple.map((item) => {
//   for (key in item) {
//     console.log(`item`, item);
//     console.log(`key`, key);
//     console.log(`item[key]`, item[key]);
//   }
// });

// const car = { wheels: 4 };
// const ford = { model: "Mondeo", __proto__: car };

// console.log(ford.wheels); // 4

// const transmission = { hasManualTransmission: true };
// const car = { wheels: 4, __proto__: transmission };
// const ford = { model: "Mondeo", __proto__: car };

// console.log(ford.hasManualTransmission); // true

// const BASE_URL = `https://defence24.pl/`;
// async function fetchData() {
//   try {
//     const response = await fetch(BASE_URL);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Wystąpił błąd: " + error);
//   }
// }

// fetchData();
// var a = 125;
// var b = 125;
// var c = 125;

// function color() {
//   if (a >= 250) {
//     a = a - 10;
//   } else if (a <= 5) {
//     a = a + 10;
//   } else {
//     a = a + Math.floor(Math.random() * 5);
//   }

//   if (b >= 250) {
//     b = b - 10;
//   } else if (b <= 5) {
//     b = b + 10;
//   } else {
//     b = b + Math.floor(Math.random() * 5);
//   }

//   if (c >= 250) {
//     c = c - 10;
//   } else if (c <= 5) {
//     c = c + 10;
//   } else {
//     c = c + Math.floor(Math.random() * 5);
//   }

//   document.getElementsByClassName("btn-default").style.backgroundColor =
//     "rgb(" + a + "," + b + "," + c + ")" + "!Important";
// }
// const name = "Jacob";

// function sayHello(x) {
//   return `Hello ${x}`;
// }
const array = [
  { length: 60, width: 40 },
  { length: 80, width: 40 },
  { length: 80, width: 40 },
  { length: 100, width: 40 },
];
const getArea = function w(x) {
  x.map((item) => item.length * item.width).reduce(function (acc, curr) {
    return acc + curr;
  });
};
const y = w(array);
console.log(y);
