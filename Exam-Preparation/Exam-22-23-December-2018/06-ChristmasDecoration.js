function christmasDecoration(input) {
  let buget = Number(input[0]);
  let moneyLeft = true;
  for (let i = 1; i < input.length; i++) {
    let item = input[i];
    let itemPrice = 0;
    if (item === 'Stop') {
      break;
    }
    for (let j = 0; j < item.length; j++) {
      itemPrice += item.charCodeAt(j);
    }
    if (itemPrice > buget) {
      console.log('Not enough money!');
      moneyLeft = false;
      break;
    } else {
      buget -= itemPrice;
      console.log('Item successfully purchased!');
    }
  }
  if (moneyLeft) {
    console.log(`Money left: ${buget}`);
  }
}
christmasDecoration([3000, 'star', 'Christmas tree', 'tinsel', 'Tree stand']);