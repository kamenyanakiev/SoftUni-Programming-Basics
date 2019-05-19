function touristShop(input) {
  let budget = Number(input[0]);
  let itemCost = 0;
  let totalCost  = 0;
  let itemCount = 0;
  for (let i = 1; i < input.length; i+=2) {
    if (input[i] === 'Stop'){
      console.log(`You bought ${(i-1)/2} products for ${(totalCost).toFixed(2)} leva.`);
      return;
    }
    itemCount++;
    itemCost = Number(input[i+1])
    if (itemCount % 3 === 0){
      itemCost /= 2;
    }
    totalCost += itemCost;
  }
    console.log(`You don't have enough money!`);
    console.log(`You need ${(totalCost - budget).toFixed(2)} leva!`);

}
touristShop([153.20, 'Backpack', 25.20, 'Shoes', 54, 'Sunglasses', 30, 'Stop']);