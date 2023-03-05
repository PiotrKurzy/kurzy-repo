function trueIfTwelve(a, b) {
  const res1 = a + b;
  const res2 = a - 12;
  const res3 = b - 12;

  return res1;
  return res2;
  return res3;
}
let res = trueIfTwelve(10, 10);
if (res1 === 12 || res2 === 0 || res3 === 0) {
  console.log("True");
} else {
  console.log("Wynik nie jest 12 i wynosi:", res1);
}
