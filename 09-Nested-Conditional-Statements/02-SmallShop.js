function smallShop(input) {
  let product = input[0];
  let city = input[1];
  let quantity = Number(input[2]);
  let price = 0;
  if (city === 'Sofia') {
    if (product === 'coffee') {
      price = 0.50;
      console.log(quantity * price);
    } else if (product === 'water') {
      price = 0.80;
      console.log(quantity * price);
    } else if (product === 'beer') {
      price = 1.20;
      console.log(quantity * price);
    } else if (product === 'sweets') {
      price = 1.45;
      console.log(quantity * price);
    } else if (product === 'peanuts') {
      price = 1.60;
      console.log(quantity * price);
    }
  } else if (city === 'Plovdiv') {
    if (product === 'coffee') {
      price = 0.40;
      console.log(quantity * price);
    } else if (product === 'water') {
      price = 0.70;
      console.log(quantity * price);
    } else if (product === 'beer') {
      price = 1.15;
      console.log(quantity * price);
    } else if (product === 'sweets') {
      price = 1.30;
      console.log(quantity * price);
    } else if (product === 'peanuts') {
      price = 1.50;
      console.log(quantity * price);
    }
  } else if (city === 'Varna') {
    if (product === 'coffee') {
      price = 0.45;
      console.log(quantity * price);
    } else if (product === 'water') {
      price = 0.70;
      console.log(quantity * price);
    } else if (product === 'beer') {
      price = 1.10;
      console.log(quantity * price);
    } else if (product === 'sweets') {
      price = 1.35;
      console.log(quantity * price);
    } else if (product === 'peanuts') {
      price = 1.55;
      console.log(quantity * price);
    }
  }
}
smallShop(['coffee', 'Varna', 2]);