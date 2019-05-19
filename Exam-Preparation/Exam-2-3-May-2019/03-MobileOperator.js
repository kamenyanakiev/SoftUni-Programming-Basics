function mobileOperators(input) {
  let contractTime = input[0];
  let contractType = input[1];
  let mobileInternet = input[2];
  let monthsForPayment = input[3];
  let totalPrice = 0;
  let paymentPerMonth = 0;
  let mobileBill = 0;
  if (contractTime === 'one'){
    if (contractType === 'Small'){
      paymentPerMonth = 9.98;
    } else if (contractType === 'Middle'){
      paymentPerMonth = 18.99;
    } else if (contractType === 'Large'){
      paymentPerMonth = 25.98;
    } else if (contractType === 'ExtraLarge'){
      paymentPerMonth = 35.99;
    }
  } else if (contractTime === 'two'){
    if (contractType === 'Small'){
      paymentPerMonth = 8.58;
    } else if (contractType === 'Middle'){
      paymentPerMonth = 17.09;
    } else if (contractType === 'Large'){
      paymentPerMonth = 23.59;
    } else if (contractType === 'ExtraLarge'){
      paymentPerMonth = 31.79;
    }
  }
  if (mobileInternet === 'yes'){
    if (paymentPerMonth <= 10){
      mobileBill = 5.50;
    } else if (paymentPerMonth <= 30){
      mobileBill = 4.35;
    } else if (paymentPerMonth > 30){
      mobileBill = 3.85;
    }
    totalPrice = paymentPerMonth + mobileBill;
  } else if (mobileInternet === 'no'){
    mobileBill = 0;
    totalPrice = paymentPerMonth + mobileBill;
  }
  if (contractTime === 'two'){
    totalPrice *= monthsForPayment;
    totalPrice *= 0.9625
    console.log(`${totalPrice.toFixed(2)} lv.`);
    
  }else if (contractTime === 'one'){
    totalPrice *= monthsForPayment;
    console.log(`${totalPrice.toFixed(2)} lv.`);
  }
}
mobileOperators(['two', 'Large', 'no', 10])