function numberRow(input) {
  let number = Number(input);
  let start = 1;
  while (start <= number) {
    console.log(start);
    start = start * 2 + 1;
  }
}
numberRow(7);