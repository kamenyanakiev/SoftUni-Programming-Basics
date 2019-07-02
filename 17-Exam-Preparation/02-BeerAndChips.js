function beerAndChips(input) {
  let person = input[0];
  let buget = Number(input[1]);
  let numberOfBeers = Number(input[2]);
  let numberOfChips = Number(input[3]);
  let beerPrice = numberOfBeers * 1.2;
  let chipsPrice = Math.ceil((beerPrice * 0.45) * numberOfChips);
  let totalPrice = beerPrice + chipsPrice;
  if (totalPrice > buget){
    console.log(`${person} needs ${(totalPrice - buget).toFixed(2)} more leva!`);
  } else {
    console.log(`${person} bought a snack and has ${(buget - totalPrice).toFixed(2)} leva left.`);
  }
}
beerAndChips(['George', 10, 2, 3]);