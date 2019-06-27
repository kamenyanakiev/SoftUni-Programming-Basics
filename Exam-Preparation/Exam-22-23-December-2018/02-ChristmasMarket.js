function christmasMarket(input) {
  let neededSum = Number(input[0]);
  let fantasy = Number(input[1]) * 14.90;
  let horror = Number(input[2]) * 9.80;
  let romatic = Number(input[3]) * 4.30;
  let earnedSum = fantasy + horror + romatic;
  earnedSum = earnedSum - (earnedSum * 0.20);
  if (earnedSum > neededSum) {
    let sellerSum = Math.floor((earnedSum - neededSum) * 0.10);
    earnedSum -= sellerSum;
    console.log(`${earnedSum.toFixed(2)} leva donated.`);
    console.log(`Sellers will receive ${sellerSum} leva.`);
  } else {
    console.log(`${(neededSum - earnedSum).toFixed(2)} money needed.`);
  }
}
christmasMarket([200, 15, 10, 5]);