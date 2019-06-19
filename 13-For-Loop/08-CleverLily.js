function cleverLily(input) {
  let age = Number(input[0]);
  let price = Number(input[1]);
  let toyPrice = Number(input[2]);
  let totalSum = 0;
  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      totalSum += 10 * (i / 2);
      totalSum -= 1;
    } else {
      totalSum += toyPrice;
    }
  }
  if (totalSum >= price) {
    console.log(`Yes! ${(totalSum - price).toFixed(2)}`);
  } else {
    console.log(`No! ${(price - totalSum).toFixed(2)}`);
  }
}
cleverLily([10, 170.00, 6]);