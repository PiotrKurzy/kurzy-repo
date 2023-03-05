// const x = 1;
// while (x < 20) {
//   // "x < 20" // warunek wykonywania pętli
//   // wykonaj kod umieszczony tutaj
//   x++; // zwiększ wartość x o 1
// }
// console.log(`x`, x);

function loop(x) {
  if (x >= 20)
    // "x >= 20" warunek wyjściowy z funkcji
    return; // return czyli wyjscie z funkcji gdy if zostanie spełniony
  // Wykonaj kod umieszczony tutaj kiedy warunek jeszcze nie został spełniony
  loop(x + 1); // rekurencyjne wywołanie, czyli to samo co inkrementacji w naszej pętli
  console.log(`x`, x);
}
loop(0);
