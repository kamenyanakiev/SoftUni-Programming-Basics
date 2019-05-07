function vetParking(input) {
  let days = Number(input[0]);
  let hours = Number(input[1]);
  let pricePerDay = 0;
  let pricePerHour = 0;
  let totalPrice = 0;
  for (let i = 1; i <= days; i++) {
    for (let j = 1; j <= hours; j++){
      if (i % 2 === 0){
        if(j % 2 === 0){
          pricePerHour += 1;
        } else if (j % 2 !== 0){
          pricePerHour += 2.50;
        }
      } else if (i % 2 !== 0){
        if(j % 2 === 0){
          pricePerHour += 1.25;
        } else if (j % 2 !== 0){
          pricePerHour += 1;
        }
      }
    }
    pricePerDay += pricePerHour;
    totalPrice += pricePerDay;
    console.log(`Day: ${i} - ${pricePerDay.toFixed(2)} leva`);
    pricePerDay = 0;
    pricePerHour = 0;
  }
  console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}
vetParking([5, 2]);