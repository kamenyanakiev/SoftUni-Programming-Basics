function halfSumElement(input) {
  let maxNumber = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (let i = 1; i < input.length; i++) {
    let num = Number(input[i])
    sum += num;
    if (num > maxNumber) {
      maxNumber = num;
    }
  }
  sum -= maxNumber
  if (sum === maxNumber) {
    console.log(`Yes`);
    console.log(`Sum = ${maxNumber}`);
  } else {
    console.log(`No`);
    console.log(`Diff = ${Math.abs(maxNumber - sum)}`);
  }
}
halfSumElement([3, 0, 0, 2]);