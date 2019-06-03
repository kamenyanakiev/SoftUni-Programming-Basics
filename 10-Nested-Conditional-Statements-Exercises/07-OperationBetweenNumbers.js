function operationBetweenNumbers(input) {
  let firstNumber = Number(input[0]);
  let secondNumber = Number(input[1]);
  let operation = input[2];
  let result = 0;
  if (operation === '+' || operation === '-' || operation === '*') {
    if (operation === '+') {
      result = firstNumber + secondNumber;
      if (result % 2 === 0) {
        console.log(`${firstNumber} + ${secondNumber} = ${result} - even`);
      } else {
        console.log(`${firstNumber} + ${secondNumber} = ${result} - odd`);
      }
    } else if (operation === '-') {
      result = firstNumber - secondNumber;
      if (result % 2 === 0) {
        console.log(`${firstNumber} - ${secondNumber} = ${result} - even`);
      } else {
        console.log(`${firstNumber} - ${secondNumber} = ${result} - odd`);
      }
    } else if (operation === '*') {
      result = firstNumber * secondNumber;
      if (result % 2 === 0) {
        console.log(`${firstNumber} * ${secondNumber} = ${result} - even`);
      } else {
        console.log(`${firstNumber} * ${secondNumber} = ${result} - odd`);
      }
    }
  } else if (operation === '/' || operation === '%') {
    if (secondNumber === 0) {
      console.log(`Cannot divide ${firstNumber} by zero`);
    } else if (operation === '/') {
      result = firstNumber / secondNumber;
      console.log(`${firstNumber} / ${secondNumber} = ${result.toFixed(2)}`);
    } else if (operation === '%') {
      result = firstNumber % secondNumber;
      console.log(`${firstNumber} % ${secondNumber} = ${result}`);
    }
  }
}
operationBetweenNumbers([10, 12, '+']);