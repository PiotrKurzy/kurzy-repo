const checkNumber = (a, b, c) => {
  let array = [a, b, c];
  let newArray = [];
  let x = 0;

  for (i = 0; i < array.length; i++) newArray.push(array[i] % 10);

  if (
    newArray[0] / newArray[1] == 1 &&
    newArray[1] / newArray[2] == 1 &&
    newArray[0] / newArray[2] == 1
  ) {
    x = "Ostatnie cyfry są identyczne";
  } else {
    x = "Ostatnie cyfry są różne od siebie";
  }

  return { newArray, x };
};

let res = checkNumber(7, 22222222, 777);

console.log(res);
