function oddEvenSum(input) {
  let oddSum = 0;
  let evenSum = 0;
  input.shift();
  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      evenSum += Number(input[i]);
    } else {
      oddSum += Number(input[i]);
    }
  }
  if (oddSum === evenSum) {
    console.log(`Yes`);
    console.log(`Sum = ${evenSum}`);

  } else {
    console.log(`No`);
    console.log(`Diff = ${Math.abs(evenSum - oddSum)}`);
  }
}
oddEvenSum([4, 10, 50, 60, 20]);