function numberBetween(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let number = Number(numbers[i]);
    if (number >= 1 && number <= 100){
      console.log(`The number is: ${number}`);
    } else {
      console.log('Invalid number!');
    }
  }
}
numberBetween([1]);