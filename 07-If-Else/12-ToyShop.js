function toyShop(input) {
  let tripPrice = Number(input[0]);
  let totalPrice = 0;
  let toys = {
    puzzles: Number(input[1]),
    dolls: Number(input[2]),
    bears: Number(input[3]),
    minions: Number(input[4]),
    trucks: Number(input[5])
  }
  let totalToys= toys.puzzles + toys.dolls + toys.bears + toys.minions + toys.trucks;
  let toysPrice = {
    puzzlePrice: 2.60,
    dollPrice: 3,
    bearPrice: 4.10,
    minionPrice: 8.20,
    truckPrice: 2
  }
  totalPrice = (toysPrice.puzzlePrice * toys.puzzles) + (toysPrice.dollPrice * toys.dolls) + (toysPrice.bearPrice * toys.bears) +
  (toysPrice.minionPrice * toys.minions) + (toysPrice.truckPrice * toys.trucks);
  if (totalToys >= 50) {
    totalPrice = totalPrice - (totalPrice * 0.25);
  }
  totalPrice = totalPrice - (totalPrice * 0.10);
  if(tripPrice <= totalPrice){
    console.log(`Yes! ${(totalPrice - tripPrice).toFixed(2)} lv left.`);
  } else{
    console.log(`Not enough money! ${Math.abs(totalPrice - tripPrice).toFixed(2)} lv needed.`);
  }
}
toyShop([474.8, 20, 25, 30, 50, 10]);