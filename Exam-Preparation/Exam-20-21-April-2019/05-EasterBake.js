function easterBake(input) {
  let sugar = {
    totalSugar: 0,
    maxSugar: Number(input[1])
  }
  let flour = {
    totalFlour: 0,
    maxFrour: Number(input[2])
  }
  for (let i = 1; i < input.length; i += 2) {
    sugar.totalSugar += Number(input[i]);
    flour.totalFlour += Number(input[i + 1]);
    if (input[i] > sugar.maxSugar) {
      sugar.maxSugar = Number(input[i]);
    }
    if (input[i + 1] > flour.maxFrour) {
      flour.maxFrour = Number(input[i + 1]);
    }
  }
  sugar.totalSugar = sugar.totalSugar / 950;
  flour.totalFlour = flour.totalFlour / 750;
  console.log(`Sugar: ${Math.ceil(sugar.totalSugar)}`);
  console.log(`Flour: ${Math.ceil(flour.totalFlour)}`);
  console.log(`Max used flour is ${flour.maxFrour} grams, max used sugar is ${sugar.maxSugar} grams.`);
}
easterBake([4, 500, 350, 560, 430, 600, 345, 578, 543]);