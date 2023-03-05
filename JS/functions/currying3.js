const ergeWords = (a) => {
  return (b) => {
    return (c) => {
      return (d) => {
        return (e) => {
          return a + b + c + d;
        };
      };
    };
  };
};

console.log(ergeWords("There ")("is ")("no ")("spoon.")());
