function specialNumbers(input) {
  let number = Number(input[0]);
  let result = '';
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      for (let l = 1; l < 10; l++) {
        for (let m = 1; m < 10; m++) {
          if (number % i === 0 && number % j === 0 && number % l === 0 && number % m === 0) {
            result += `${i}${j}${l}${m} `
          }
        }
      }
    }
  }
  console.log(result);
}
specialNumbers([3]);