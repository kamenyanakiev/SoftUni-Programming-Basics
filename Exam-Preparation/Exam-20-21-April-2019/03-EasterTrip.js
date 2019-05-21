function easterTrip(input) {
  let destination = input[0]
  let dates = input[1];
  let daysCost = Number(input[2]);
  let price = 0;
  if (destination === 'Germany'){
    if (dates === '21-23'){
      price = 32;
    } else if (dates === '24-27'){
      price = 37;
    } else if (dates === '28-31'){
      price = 43;
    }
  } else if (destination === 'Italy'){
    if (dates === '21-23'){
      price = 28;
    } else if (dates === '24-27'){
      price = 32;
    } else if (dates === '28-31'){
      price = 39;
    }
  } else if (destination === 'France'){
    if (dates === '21-23'){
      price = 30;
    } else if (dates === '24-27'){
      price = 35;
    } else if (dates === '28-31'){
      price = 40;
    }
  }
  price *= daysCost;
  console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);
}
easterTrip(['Germany', '24-27', 5]);