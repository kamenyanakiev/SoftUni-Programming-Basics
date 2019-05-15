function flowerShop(input) {
  let chrys = Number(input[0]);
  let roses = Number(input[1]);
  let tulip = Number(input[2]);
  let totalFlowers = chrys + roses + tulip;
  let chrysPrice = 0;
  let rosePrice = 0;
  let tulipPrice = 0;
  let totalPrice = 0;
  let season = input[3];
  let holiday = input[4];
  if(season === 'Spring' || season === 'Summer'){
    chrysPrice = 2.00 * chrys;
    rosePrice = 4.10 * roses;
    tulipPrice = 2.50 * tulip;
    totalPrice = chrysPrice + rosePrice + tulipPrice;
  }else if(season === 'Autumn' || season === 'Winter'){
    chrysPrice = 3.75 * chrys;
    rosePrice = 4.50 * roses;
    tulipPrice = 4.15 * tulip;
    totalPrice = chrysPrice + rosePrice + tulipPrice;
  }
  if(holiday === 'Y'){
    totalPrice = totalPrice + (totalPrice * 0.15); 
  }
  if(season === 'Spring' && tulip > 7){
    totalPrice = totalPrice - (totalPrice * 0.05);
  } else if (season === 'Winter' && roses >= 10){
    totalPrice = totalPrice - (totalPrice * 0.10);
  } 
  if (totalFlowers > 20){
    totalPrice = totalPrice - (totalPrice * 0.20);
  }
  console.log((totalPrice + 2).toFixed(2));
}
flowerShop([2, 4, 8, 'Spring', 'Y']);