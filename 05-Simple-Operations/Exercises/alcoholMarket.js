function alcoholMarket(input) {
  let whiskey = Number(input[0]);
  let rakiyaPrice = whiskey / 2;
  let totalRakiya = rakiyaPrice * Number(input[3]);
  let winePrice = rakiyaPrice - (0.4 * rakiyaPrice);
  let totalWine = winePrice * Number(input[2]);
  let beerPrice = rakiyaPrice - (0.8 * rakiyaPrice);
  let totalBeer = beerPrice * Number(input[1]);
  let totalWhiskey = whiskey * Number(input[4]);
  console.log((totalWhiskey + totalBeer + totalWine + totalRakiya).toFixed(2));
}
alcoholMarket ([50, 10, 3.5, 6.5, 1]);