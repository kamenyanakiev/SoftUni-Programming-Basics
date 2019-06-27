function pastryShop(input) {
  let sweet = input[0];
  let quantity = Number(input[1]);
  let day = Number(input[2]);
  let price = 0;
  if (sweet === 'Cake') {
    if (day <= 15) {
      price = 24;
    } else {
      price = 28.70;
    }
  } else if (sweet === 'Souffle') {
    if (day <= 15) {
      price = 6.66;
    } else {
      price = 9.80;
    }
  } else if (sweet === 'Baklava') {
    if (day <= 15) {
      price = 12.60;
    } else {
      price = 16.98;
    }
  }
  price *= quantity;
  if (day <= 22) {
    if (price >= 100 && price <= 200) {
      price *= 0.85;
    } else if (price > 200) {
      price *= 0.75;
    }
  }
  if (day <= 15) {
    price *= 0.90;
  }
  console.log(price.toFixed(2));
}
pastryShop(['Souffle', 20, 24]);