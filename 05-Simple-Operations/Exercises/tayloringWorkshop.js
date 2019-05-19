function tayloringWorkshop(input) {
  let coverArea = Number(input[0]) * (Number(input[1]) + 2 * 0.30) * (Number(input[2]) + 2 * 0.30);
  let boxArea = Number(input[0]) * (Number(input[1]) / 2) * (Number(input[1]) / 2);
  let dollarPrice = coverArea * 7 + boxArea * 9;
  let bgnPrice = dollarPrice * 1.85;
  console.log(`${dollarPrice.toFixed(2)} USD`);
  console.log(`${bgnPrice.toFixed(2)} BGN`);
}
tayloringWorkshop([5, 1.00, 0.50]);