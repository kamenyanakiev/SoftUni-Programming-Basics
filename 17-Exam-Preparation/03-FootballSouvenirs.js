function footballSouvenirs(input) {
  let country = input[0];
  let item = input[1];
  let itemQuantity = Number(input[2]);
  let price = 0;
  let isValid = true;
  if (country === 'Argentina') {
    if (item === 'flags') {
      price = 3.25 * itemQuantity;
    } else if (item === 'caps') {
      price = 7.20 * itemQuantity;
    } else if (item === 'posters') {
      price = 5.10 * itemQuantity;
    } else if (item === 'stickers') {
      price = 1.25 * itemQuantity;
    } else {
      console.log('Invalid stock!');
      isValid = false;
    }
  } else if (country === 'Brazil') {
    if (item === 'flags') {
      price = 4.20 * itemQuantity;
    } else if (item === 'caps') {
      price = 8.50 * itemQuantity;
    } else if (item === 'posters') {
      price = 5.35 * itemQuantity;
    } else if (item === 'stickers') {
      price = 1.2 * itemQuantity;
    } else {
      console.log('Invalid stock!');
      isValid = false;
    }
  } else if (country === 'Croatia') {
    if (item === 'flags') {
      price = 2.75 * itemQuantity;
    } else if (item === 'caps') {
      price = 6.9 * itemQuantity;
    } else if (item === 'posters') {
      price = 4.95 * itemQuantity;
    } else if (item === 'stickers') {
      price = 1.1 * itemQuantity;
    } else {
      console.log('Invalid stock!');
      isValid = false;
    }
  } else if (country === 'Denmark') {
    if (item === 'flags') {
      price = 3.1 * itemQuantity;
    } else if (item === 'caps') {
      price = 6.5 * itemQuantity;
    } else if (item === 'posters') {
      price = 4.8 * itemQuantity;
    } else if (item === 'stickers') {
      price = 0.9 * itemQuantity;
    } else {
      console.log('Invalid stock!');
      isValid = false;
    }
  } else {
    console.log('Invalid country!');
    isValid = false;
  }
  if (isValid) {
    console.log(`Pepi bought ${itemQuantity} ${item} of ${country} for ${price.toFixed(2)} lv.`);
  }
}
footballSouvenirs(['Denmark', 'caps', 8]);