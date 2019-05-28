function skeleton(input) {
  let controlTime = (Number(input[0]) * 60) + Number(input[1]);
  let slowDown = (Number(input[2]) / 120) * 2.5;
  let totalTime = ((Number(input[2]) / 100) * Number(input[3])) - slowDown;
  if (totalTime <= controlTime) {
    console.log(`Marin Bangiev won an Olympic quota!`);
    console.log(`His time is ${totalTime.toFixed(3)}.`);
  } else {
    console.log(`No, Marin failed! He was ${(totalTime - controlTime).toFixed(3)} second slower.`);
  }
}
//skeleton([2, 12, 1200, 10]);
skeleton([1, 20, 1546, 12])