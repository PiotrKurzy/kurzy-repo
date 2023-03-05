let x = 0;

function repeat([...rest]) {
  while (x < rest.length) {
    x++;
  }
  console.log(`Wartość maksymalna: `, Math.max(...rest));
  console.log(`Wartość minimlna: `, Math.min(...rest));
}
repeat([2, 4, 5, 67, 122, 456]);
