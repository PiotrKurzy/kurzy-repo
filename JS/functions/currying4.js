const priceReduction = (a) => {
  console.log(`Cena regularna [zł]: `, a);
  return (b) => {
    console.log(`Rabat [%]: `, b);
    return a - (a * b) / 100;
  };
};

console.log(`Cena po obniżce [zł]: `, priceReduction(112)(10));
