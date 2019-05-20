function bonusScore(input) {
  let points = Number(input[0]);
  let sum = 0;
  let bonus = 0;
  if (points <= 100) {
    sum = points + 5;
  } else if (points > 100 && points <= 1000) {
    sum = points + (0.20 * points);
  } else {
    sum = points + (0.10 * points);
  }
  if (points % 2 === 0) {
    bonus = sum + 1;
  } else if (points % 10 === 5) {
    bonus = sum + 2;
  } else {
    bonus = sum;
  }
  console.log(Math.abs(bonus - points).toFixed(1));
  console.log(Math.abs(bonus));
}
bonusScore([2703]);