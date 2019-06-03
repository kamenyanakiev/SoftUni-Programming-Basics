function fruitsShop(input) {
  let fruit = input[0];
  let day = input[1];
  let quantity = Number(input[2]);
  let price = 0;
  if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
    if (fruit === 'apple') {
      price = 1.20;
      console.log((quantity * price).toFixed(2));
    } else if (fruit === 'banana') {
      price = 2.50;
      console.log((quantity * price).toFixed(2));
    } else if (fruit === 'orange') {
      price = 0.85;
      console.log((quantity * price).toFixed(2));
    } else if (fruit === 'grapefruit') {
      price = 1.45;
      console.log((quantity * price).toFixed(2));
    } else if (fruit === 'kiwi') {
      price = 2.70;
      console.log((quantity * price).toFixed(2));
    } else if (fruit === 'pineapple') {
      price = 5.50;
      console.log((quantity * price).toFixed(2));
    } else if (fruit === 'grapes') {
      price = 3.85;
      console.log((quantity * price).toFixed(2));
    } else {
      console.log('error');
    }
  } else if (day === 'Saturday' || day === 'Sunday') {
    if (fruit === 'apple') {
      price = 1.25;
      console.log((quantity * price).toFixed(2));
    } else if (fruit === 'banana') {
      price = 2.70;
      console.log((quantity * price).toFixed(2));
    } else if (fruit === 'orange') {
      price = 0.90;
      console.log((quantity * price).toFixed(2));
    } else if (fruit === 'grapefruit') {
      price = 1.60;
      console.log((quantity * price).toFixed(2));
    } else if (fruit === 'kiwi') {
      price = 3.00;
      console.log((quantity * price).toFixed(2));
    } else if (fruit === 'pineapple') {
      price = 5.60;
      console.log((quantity * price).toFixed(2));
    } else if (fruit === 'grapes') {
      price = 4.20;
      console.log((quantity * price).toFixed(2));
    } else {
      console.log('error');
    }
  } else {
    console.log('error');
  }
}
fruitsShop(['apple', 'Tuesday', 2]);