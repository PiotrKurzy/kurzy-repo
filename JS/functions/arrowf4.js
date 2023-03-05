const arr = [
  {
    name: "Andrzej",
    age: 30,
    profession: "lekarz",
  },
  {
    name: "Wiesiek",
    age: 60,
    profession: "piekarz",
  },
];
{
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
}
