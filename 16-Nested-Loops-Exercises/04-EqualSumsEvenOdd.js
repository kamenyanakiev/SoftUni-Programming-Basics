function equalSumsEvenOdd(input) {
  let result = '';
  for (let i = Number(input[0]); i <= Number(input[1]); i++) {
    let stringNumber = String(i);
    let equalSum = 0;
    let oddSum = 0;
    for (let j = 0; j < input[0].length; j++) {
      let currentNum = Number(stringNumber[j])
      if (j % 2 === 0){
        equalSum += currentNum;
      } else {
        oddSum += currentNum;
      }
    }
    if (equalSum === oddSum) {
      result += `${i} `
    }
  }
  console.log(result);
}
equalSumsEvenOdd(['100000', '100050']);