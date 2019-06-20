function equalPairs(input) {
  let lastSum = 0;
  let maxDifference = 0;
  for (let i = 1; i <= Number(input[0]) * 2; i += 2) {
    let firstNum = Number(input[i]);
    let secondNum = Number(input[i + 1]);
    let currentSum = firstNum + secondNum;
    if (i !== 1) {
      let currentDifference = Math.abs(currentSum - lastSum);
      if (currentDifference > maxDifference) {
        maxDifference = currentDifference;
      }
    }
    lastSum = currentSum;
  }
  if (maxDifference === 0) {
    console.log(`Yes, value=${lastSum}`);
  } else {
    console.log(`No, maxdiff=${maxDifference}`);
  }
}
equalPairs([3, 1, 2, 0, 3, 4, -1]);