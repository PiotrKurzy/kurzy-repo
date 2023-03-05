const fruits = ["banana", "apple", "cherry", "mango", "apricot"];

fruits.forEach(function (item) {
  if (item[0] === `a`) {
    x = `an`;
  } else {
    x = `a`;
  }
  return console.log(`I want to eat ${x} ${item}`);
});
