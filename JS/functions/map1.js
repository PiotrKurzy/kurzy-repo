const names = [
  "Krysia",
  "Kamil",
  "Zosia",
  "Krystian",
  "Kasia",
  "Sebastian",
  "Basia",
];

const namesMapped = [];

function getGender(name) {
  const lastChar = name[name.length - 1];
  if (lastChar === "a") {
    return "female";
  }
  return "male";
}

for (i = 0; i < names.length; i++) {
  const name = names[i];
  const person = {
    name,
    gender: getGender(name),
  };
  namesMapped.push(person);
}

function warmWelcome(person) {
  const join = person.gender === "female" ? "dołączyłaś" : "dołączyłeś";
  const welcome = `Witaj ${person.name}, bardzo nam miło, że do nas ${join}.`;
  console.log(welcome);
}
for (i = 0; i < namesMapped.length; i++) {
  warmWelcome(namesMapped[i]);
}
