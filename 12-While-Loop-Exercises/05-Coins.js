function coins(input) {
  let i = 0;
  let totalCoins = input[0];
  while (totalCoins > 0.0){
    if (totalCoins >= 2.0){
      totalCoins = (totalCoins - 2.0).toFixed(2);
      i++;  
    } else if (totalCoins >= 1.0){
      totalCoins = (totalCoins - 1.0).toFixed(2);
      i++;
    } else if (totalCoins >= 0.50){
      totalCoins = (totalCoins - 0.50).toFixed(2);
      i++
    } else if (totalCoins >= 0.20){
      totalCoins = (totalCoins - 0.20).toFixed(2);
      i++;
    } else if (totalCoins >= 0.10){
      totalCoins = (totalCoins - 0.10).toFixed(2);
      i++;
    } else if (totalCoins >= 0.05){
      totalCoins = (totalCoins - 0.05).toFixed(2);
      i++;
    } else if (totalCoins >= 0.02){
      totalCoins = (totalCoins - 0.02).toFixed(2);
      i++;
    } else {
      totalCoins = (totalCoins - 0.01).toFixed(2);
      i++;
    }
  }
  console.log(i);
}
coins([1.23]);