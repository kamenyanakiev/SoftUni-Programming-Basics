function numberPyramid(input) {
  let number = Number(input[0]);
  let result = '';
  let numCounter = 1;
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      if (numCounter > number) {
        break;
      } else {
        result += `${numCounter} `;
        numCounter++;
      }
    }
    console.log(result);
    result = '';
  }
}
numberPyramid([10]);