function safari(input){
  let guide = 100;
  let gasPrice = Number(input[1]) * 2.10;
  let totalFunds = Number(input[0]);
  let day = input[2];
  let requiredFunds = 0;
  requiredFunds = (guide + gasPrice);
  if (day === 'Saturday'){
    requiredFunds *= 0.90;
  } else if (day === 'Sunday'){
    requiredFunds *= 0.80;
  }
  if (requiredFunds < totalFunds){
    console.log(`Safari time! Money left: ${(totalFunds - requiredFunds).toFixed(2)} lv.`);
  } else if (requiredFunds > totalFunds){
    console.log(`Not enough money! Money needed: ${(requiredFunds - totalFunds).toFixed(2)} lv.`);
  }
}
safari([1000, 10, 'Sunday']);