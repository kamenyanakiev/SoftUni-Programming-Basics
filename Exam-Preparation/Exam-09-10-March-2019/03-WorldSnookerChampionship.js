function worldSnookerChampionship(input) {
  let stage = input[0];
  let ticketType = input[1];
  let numberOfTickets = Number(input[2]);
  let photo = input[3];
  let price = 0;
  if (stage === 'Final') {
    if (ticketType === 'Standard') {
      price = 110.10;
    } else if (ticketType === 'Premium') {
      price = 160.66;
    } else if (ticketType === 'VIP') {
      price = 400;
    }
  } else if (stage === 'Semi final') {
    if (ticketType === 'Standard') {
      price = 75.88;
    } else if (ticketType === 'Premium') {
      price = 125.22;
    } else if (ticketType === 'VIP') {
      price = 300.40;
    }
  } else if (stage === 'Quarter final') {
    if (ticketType === 'Standard') {
      price = 55.50;
    } else if (ticketType === 'Premium') {
      price = 105.20;
    } else if (ticketType === 'VIP') {
      price = 118.90;
    }
  }
  price *= numberOfTickets;
  if (price > 2500 && price <= 4000) {
    price *= 0.90;
    if (photo === 'Y') {
      price = price + (40 * numberOfTickets);
    }
  } else if (price > 4000) {
    price *= 0.75;
  } else if (price <= 2500 && photo === 'Y') {
    price = price + (40 * numberOfTickets);
  }
  console.log(price.toFixed(2));
}
//worldSnookerChampionship(['Final', 'Premium', 25, 'Y']);
worldSnookerChampionship(['Semi final', 'VIP', 9, 'Y'])