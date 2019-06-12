function walking(input) {
  let neededSteps = 10000;
  let totalSteps = 0;
  let currentSteps = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'Going home') {
      i++;
    }
    currentSteps = Number(input[i]);
    totalSteps += currentSteps;
  }
  if (totalSteps >= neededSteps) {
    console.log(`Goal reached! Good job!`);
  } else {
    console.log(`${neededSteps - totalSteps} more steps to reach goal.`);
  }
}
walking([1000, 1500, 2000, 6500]);