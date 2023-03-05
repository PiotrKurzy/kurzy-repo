const names = [
  "Krysia",
  "Kamil",
  "Zosia",
  "Krystian",
  "Kasia",
  "Sebastian",
  "Basia",
];

function getGender(name) {
  const lastChar = name[name.length - 1];
  if (lastChar === "a") {
    return "female";
  }
  return "male";
}

const mapName = (name) => ({
  name: name,
  gender: getGender(name),
});

const namesMapped2 = names.map(mapName);
// console.log(namesMapped2);

// const namesMapped = [];
// for (i = 0; i < names.length; i++) {
//   const name = names[i];
//   const person = {
//     name,
//     gender: getGender(name),
//   };
//   namesMapped.push(person);
// }
// console.log(namesMapped2[0].sayHello());

function warmWelcome(namesMapped2, getGender2) {
  const gender = getGender2(namesMapped2.name);
  console.log(`gender`, gender);
  // const join = namesMapped2.gender === "female" ? "dołączyłaś" : "dołączyłeś";
  // const welcome = `Witaj ${namesMapped2.name}, bardzo nam miło, że do nas ${join}.`;
  // console.log(welcome);
}
// for (i = 0; i < namesMapped2.length; i++) {
//   warmWelcome(namesMapped2[i]);
// }
warmWelcome(namesMapped2[0], getGender);
