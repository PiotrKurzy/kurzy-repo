const arr = [`bartek`, `krzysiek`, `michal`];

function recursion(x) {
  while (x < arr.length) {
    console.log(arr[x]);
    x++;
  }
}
recursion(0);
