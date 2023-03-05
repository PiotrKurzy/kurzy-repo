// function restFunction(...param) {
//   console.log(param); //[1, 2, 3, 4]
// }
// restFunction(1, 2, 3, 4);

const multiplyByNum = (multiplier, ...numbers) => {
  console.log(
    `jest to pierwszy z przekazanych argumentów do funkcji muliplyByNum`,
    multiplier
  ); // jest to pierwszy z przekazanych argumentów do funkcji muliplyByNum
  console.log(
    `są to pozostałe argumenty przekazane do funkcji multiplyByNum`,
    numbers
  ); // są to pozostałe argumenty przekazane do funkcji multiplyByNum
  return numbers.map((num) => num * multiplier);
};
const multiplyBy2 = multiplyByNum(2, 1, 2, 3, 4);
console.log(multiplyBy2);
