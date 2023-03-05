const obj1 = {
  firstName: "Wiesio",
  age: 48,
};
const obj2 = {
  secondName: "Kownacki",
  weight: 76,
  sex: "male",
};

const obj = { ...obj1, ...obj2 };

console.log(obj);
