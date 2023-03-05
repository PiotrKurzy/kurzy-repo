function ageInDays(age) {
  const res = age * 365;
  return res;
}
let res = ageInDays(42);
if (res > 0) {
  console.log("Twój wiek w dniach to: ", res);
} else {
  console.log("Podany wiek jest niewłaściwy");
}
