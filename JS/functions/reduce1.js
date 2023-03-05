array = [1, 2, 3, 4];
const sum = array.reduce((acc, curr, index) => {
  console.log(`akumulator przy ${index}-iteracji`, acc);
  return acc + curr;
});
console.log(sum);
console.log(array);
//Wynik
//"akumulator przy 1-iteracji", 1
//"akumulator przy 2-iteracji", 3
//"akumulator przy 3-iteracji", 6
//10 - zwrócona finalna wartość jako zmienna sum
//[1, 2, 3, 4] - nienaruszona tablica array
