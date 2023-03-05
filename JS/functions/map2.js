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

const namesMapped2 = names.map((name) => ({
  name: name,
  gender: getGender(name),
}));

function warmWelcome(namesMapped2) {
  const join = namesMapped2.gender === "female" ? "dołączyłaś" : "dołączyłeś";
  const welcome = `Witaj ${namesMapped2.name}, bardzo nam miło, że do nas ${join}.`;
  console.log(welcome);
}
for (i = 0; i < namesMapped2.length; i++) {
  warmWelcome(namesMapped2[i]);
}
