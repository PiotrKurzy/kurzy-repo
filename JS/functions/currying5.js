const curryFunction = (a) => {
  return (b) => {
    return (c) => {
      return (d) => {
        return (
          a
            .map((item) => item * b)
            .filter((item2) => item2 % c === 0)
            .reduce((acc, curr) => acc + curr) + d
        );
      };
    };
  };
};

console.log(curryFunction([2, 6, 4, 3])(2)(4)(6));
