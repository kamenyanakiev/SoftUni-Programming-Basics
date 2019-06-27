function christmasGifts(input) {
  let moneyForToys = 0;
  let moneyForSweaters = 0;
  let kids = 0;
  let adults = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'Christmas') {
      break;
    }
    let age = Number(input[i]);
    if (age <= 16) {
      moneyForToys += 5;
      kids++;
    } else {
      moneyForSweaters += 15;
      adults++;
    }
  }
  console.log(`Number of adults: ${adults}`);
  console.log(`Number of kids: ${kids}`);
  console.log(`Money for toys: ${moneyForToys}`);
  console.log(`Money for sweaters: ${moneyForSweaters}`);
}
christmasGifts([16, 20, 46, 12, 8, 20, 49, 'Christmas']);