// function sum(a) {
//   let acc = a;
//   const addMore = (b) => {
//     acc += b;
//     return addMore;
//   };
//   addMore.add = () => acc;
//   return addMore;
// }
// console.log("result:1", sum(3)(2).add()); // 5
// console.log("result:2", sum(3)(2)(6).add()); // 11
// console.log("result:3", sum(3)(2)(4)(5).add()); // 14

const sum = (a) => {
  return (b) => {
    return (c) => {
      return (d) => {
        return a + b + c + d;
      };
    };
  };
};
console.log(sum(2)(3)(5)(4)); // 14
