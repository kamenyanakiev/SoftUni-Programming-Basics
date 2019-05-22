function easterDecoration(input) {
  let items = {
    basketPrice: 1.50,
    wreathPrice: 3.80,
    bunnyPrice: 7,
    totalPrice: 0,
    currentItems: 0,
    currentPrice: 0
  }
  for (let i = 1; i < input.length; i++) {
    if (input[i] === 'Finish') {
      if (items.currentItems % 2 === 0) {
        items.currentPrice = items.currentPrice - (items.currentPrice * 0.20);
      }
      console.log(`You purchased ${items.currentItems} items for ${(items.currentPrice).toFixed(2)} leva.`);
      items.totalPrice += items.currentPrice;
      items.currentItems = 0;
      items.currentPrice = 0;
    } else if (input[i] === 'basket') {
      items.currentPrice += items.basketPrice;
      items.currentItems++;
    } else if (input[i] === 'wreath') {
      items.currentPrice += items.wreathPrice;
      items.currentItems++;
    } else if (input[i] === 'chocolate bunny') {
      items.currentPrice += items.bunnyPrice;
      items.currentItems++;
    }
  }
  console.log(`Average bill per client is: ${(items.totalPrice/input[0]).toFixed(2)} leva.`);
}
easterDecoration([2, 'basket', 'wreath', 'chocolate bunny', 'Finish', 'wreath', 'chocolate bunny', 'Finish']);