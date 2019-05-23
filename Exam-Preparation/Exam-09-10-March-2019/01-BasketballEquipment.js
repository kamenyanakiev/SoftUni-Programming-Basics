function basketballEquipment(input) {
  let yearPrice = Number(input[0]);
  let shoePrice = yearPrice - (yearPrice * 0.40);
  let clothesPrice = shoePrice - (shoePrice * 0.20);
  let ballPrice = clothesPrice / 4;
  let accessories = ballPrice / 5;
  console.log((yearPrice + shoePrice + clothesPrice + ballPrice + accessories).toFixed(2));
}
basketballEquipment([320]);