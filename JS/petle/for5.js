let arr = ["true", "false", "false", "true", "false", "true", "false", "false"];

for (i = 0; i < arr.length; i++) {
  if (arr[i] === "true") {
    arr[i] = 1;
  } else if (arr[i] === "false") {
    arr[i] = 0;
  }
}
console.log(arr);

for (i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    arr[i] = "true";
  } else if (arr[i] === 0) {
    arr[i] = "false";
  }
}
console.log(arr);
