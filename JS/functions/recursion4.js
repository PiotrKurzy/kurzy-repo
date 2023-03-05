const arr = [{ name: `bartek` }, { name: `krzysiek` }, { name: `michal` }];
const arrNew = arr.map((item) => item.name);

function recursion(x) {
  while (x < arr.length) {
    console.log(arrNew[x]);
    x++;
  }
}
recursion(0);
