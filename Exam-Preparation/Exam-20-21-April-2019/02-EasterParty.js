function easterParty(input) {
  let guests = Number(input[0]);
  let pricePerPerson = Number(input[1]);
  let buget = Number(input[2]);
  let cakePrice = buget * 0.10;
  let totalPrice = 0;
  if(guests >=10 && guests <= 15){
    pricePerPerson = pricePerPerson - (pricePerPerson * 0.15);
  } else if (guests >15 && guests <=20){
    pricePerPerson = pricePerPerson - (pricePerPerson * 0.20);
  } else if (guests > 20){
    pricePerPerson = pricePerPerson - (pricePerPerson * 0.25);
  }
  totalPrice = (guests * pricePerPerson) + cakePrice;
  if(buget >= totalPrice){
    console.log(`It is party time! ${(buget - totalPrice).toFixed(2)} leva left.`);
  } else if (totalPrice > buget){
    console.log(`No party! ${(totalPrice - buget).toFixed(2)} leva needed.`);
  }
}
easterParty([18, 30, 450]);
