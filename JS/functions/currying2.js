const sum = (a) => {
  return (b) => {
    return a * 2 + b * 2;
  };
};
console.log(sum(2)(3));
