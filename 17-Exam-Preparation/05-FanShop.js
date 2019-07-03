function fanShop(input) {
  let buget = Number(input[0]);
  let items = Number(input[1]);
  let neededMoney = 0;
  for (let i = 2; i < items + 2; i++) {
    let item = input[i];
    if (item === 'hoodie') {
      neededMoney += 30;
    } else if (item === 'keychain'){
      neededMoney += 4;
    } else if (item === 'T-shirt'){
      neededMoney += 20;
    } else if (item === 'flag'){
      neededMoney += 15;
    } else if (item === 'sticker'){
      neededMoney += 1;
    }
  }
  if (buget >= neededMoney) {
    console.log(`You bought ${items} items and left with ${buget - neededMoney} lv.`);
  } else {
    console.log(`Not enough money, you need ${neededMoney - buget} more lv.`);
  }
}
fanShop([25, 3, 'flag', 'keychain', 'sticker']);