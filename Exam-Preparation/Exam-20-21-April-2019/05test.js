function easterBake(input) {
  let totalSugar = 0;
  let maxSugar = Number(input[1]);
  let totalFlour = 0;
  let maxFrour = Number(input[2]);
  for (let i = 1; i < input.length; i += 2) {
    totalSugar += Number(input[i]);
    totalFlour += Number(input[i + 1]);
    if (input[i] > maxSugar) {
      maxSugar = Number(input[i]);
    }
    if (input[i + 1] > maxFrour) {
      maxFrour = Number(input[i + 1]);
    }
  }
  totalSugar = totalSugar / 950;
  totalFlour = totalFlour / 750;
  console.log(`Sugar: ${Math.ceil(totalSugar)}`);
  console.log(`Flour: ${Math.ceil(totalFlour)}`);
  console.log(`Max used flour is ${maxFrour} grams, max used sugar is ${maxSugar} grams.`);
}
easterBake([4, 500, 350, 560, 430, 600, 345, 578, 543]);