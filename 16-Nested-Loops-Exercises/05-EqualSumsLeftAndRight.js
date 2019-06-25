function equalSumsLeftAndRight(input) {
  let result = '';
  for (let i = Number(input[0]); i <= Number(input[1]); i++) {
    let stringNumber = String(i);
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < stringNumber.length; j++) {
      if (j < 2) {
        leftSum += Number(stringNumber[j]);
      } else if (j > 2) {
        rightSum += Number(stringNumber[j]);
      }
    }
    if (leftSum < rightSum) {
      leftSum += Number(stringNumber[2]);
    } else if (rightSum < leftSum) {
      rightSum += Number(stringNumber[2]);
    }
    if (leftSum === rightSum) {
      result += `${stringNumber} `;
    }
  }
  console.log(result);
}
equalSumsLeftAndRight(['10000', '10100']);
