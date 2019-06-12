function vacation(input) {
  let neededFunds = Number(input[0]);
  let currentFunds = Number(input[1]);
  let daysCounter = 0;
  let spendCounter = 0;
  let currentSum = 0;
  for (let i = 2; i < input.length; i += 2) {
    currentSum = Number(input[i + 1]);
    daysCounter++;
    if (input[i] === 'save') {
      currentFunds += currentSum;
      spendCounter = 0;
    } else {
      if (currentFunds <= currentSum) {
        currentFunds = 0;
      } else {
        currentFunds -= currentSum;
        spendCounter++;
        if (spendCounter === 5) {
          console.log(`You can't save the money.`);
          console.log(daysCounter);
        }
      }
    }
    if (currentFunds >= neededFunds) {
      console.log(`You saved the money for ${daysCounter} days.`);
      break;
    }
  }
}
vacation([2000, 1000, 'spend', 1200, 'save', 2000]);