let points = [3, 4, 35];
const range = {
  min: 18,
  max: 35,
};

const check = points.some((point) => point >= range.min && point <= range.max);

console.log(check);
