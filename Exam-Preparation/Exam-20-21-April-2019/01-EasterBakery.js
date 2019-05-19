function easterBakery(input) {
  let flourPrice = Number(input[0]);
  let totalFlour = flourPrice * Number(input[1]);
  let totalSugar = Number(input[2]);
  let totalEggs = Number(input[3]);
  let totalYeast = Number(input[4]);
  let sugarPrice = flourPrice - (flourPrice * 0.25);
  let eggsPrice = flourPrice + (flourPrice * 0.10);
  let yeastPrice = sugarPrice - (sugarPrice * 0.80);
  console.log((totalFlour + (sugarPrice * totalSugar) + (eggsPrice * totalEggs) + (yeastPrice * totalYeast)).toFixed(2));  
}
easterBakery([50, 10, 3.5, 6, 1])