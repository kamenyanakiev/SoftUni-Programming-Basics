function threeEqualNumbers(numbers) {
    let firstNumber = numbers[0];
    let secondNuber = numbers[1];
    let thirdNumber = numbers[2];
    if (firstNumber === secondNuber && firstNumber === thirdNumber && secondNuber === thirdNumber){
        console.log('yes');
    } else {
        console.log('no');
    }
}
threeEqualNumbers(1,1,1)