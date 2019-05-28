function tennisEquipment(input) {
  let racketPrice = Number(input[0]);
  let totalRackets = racketPrice * Number(input[1]);
  let shoePrice = racketPrice / 6;
  let totalShoes = shoePrice * Number(input[2]);
  let totalPrice = totalRackets + totalShoes;
  let otherPrice = totalPrice * 0.2;
  totalPrice += otherPrice;
  console.log(`Price to be paid by Djokovic ${Math.floor(totalPrice / 8)}`);
  console.log(`Price to be paid by sponsors ${Math.ceil(totalPrice * 7 / 8)}`);
}
tennisEquipment([850, 4, 2]);