let x = 0;
let sum = ``;

function repeat(text, y) {
  while (x < y) {
    x++;
    sum += text;
  }
  console.log(`text: `, sum);
}
repeat(`mouse`, 7);
