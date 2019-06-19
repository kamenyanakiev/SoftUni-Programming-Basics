function leftAndRightSum(input) {
  let num = Number(input[0]);
  let firstSum = 0;
  let secondSum = 0;
  for (let i = 1; i <= num * 2; i++) {
    if (i <= num) {
      firstSum += Number(input[i]);
    } else {
      secondSum += Number(input[i])
    }
  }
  if (firstSum === secondSum) {
    console.log(`Yes, sum = ${firstSum}`);
  } else {
    console.log(`No, diff = ${Math.abs(firstSum - secondSum)}`);
  }
}
leftAndRightSum([2, 10, 90, 60, 40]);