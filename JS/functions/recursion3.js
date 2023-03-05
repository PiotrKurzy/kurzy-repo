const arr = [`bartek`, `krzysiek`, `michal`];

function recursion(x) {
  while (x > 0) {
    x--;
    console.log(arr[x]);
  }
}
recursion(arr.length);
