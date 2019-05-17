function numbers(input) {
  let number =  Number(input[0]);
  let firstNumber = Number(number.toString()[0]);
  let secondNumber = Number(number.toString()[1]);
  let thirdNumber = Number(number.toString()[2])
  let rows = firstNumber + secondNumber;
  let columns = firstNumber + thirdNumber;
  let logNumber = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (number % 5 === 0) {
        number -= firstNumber;
        logNumber += number + " ";
      } else if (number % 3 === 0){
        number -= secondNumber;
        logNumber += number + " ";
      } else {
        number += thirdNumber;
        logNumber += number + " ";
      } 
    }
    console.log(logNumber.substring(1));
    logNumber = 0
  }
}
numbers([132]);