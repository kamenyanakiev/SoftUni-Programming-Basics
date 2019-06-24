function nameWars(input) {
  let topName = "";
  let topSum = 0;
  let currentName = "";
  let currentSum = 0;
  for (let i = 0; i < input.length; i++) {
    currentName = input[i];
    currentSum = 0;
    for (let j = 0; j < currentName.length; j++) {
      currentSum += currentName.charCodeAt(j);
    }
    if (currentSum > topSum) {
      topSum = currentSum;
      topName = input[i];
    }
  }
  console.log(`Winner is ${topName} - ${topSum}!`);
}
nameWars(['Petar', 'Georgi', 'Stanimir', 'STOP']);