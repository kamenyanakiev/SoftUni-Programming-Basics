function renovation(input) {
  let buget = Number(input[0]);
  let floorSize = input[1] * input[2];
  let tileSize = (input[3] * input[4]) / 2;
  let tilePrice = Number(input[5]);
  let workPrice = Number(input[6]);
  let neededTiles = Math.ceil(floorSize / tileSize) + 5;
  let totalPrice = (neededTiles * tilePrice) + workPrice;
  if(totalPrice <= buget){
  console.log(`${(buget - totalPrice).toFixed(2)} lv left.`);
  }else if(totalPrice> buget){
    console.log(`You'll need ${(totalPrice - buget).toFixed(2)} lv more.`);
  }
}
renovation([500, 3, 2.5, 0.5, 0.7, 7.80, 100]);