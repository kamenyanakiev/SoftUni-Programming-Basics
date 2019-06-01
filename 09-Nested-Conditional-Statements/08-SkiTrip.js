function trip(input) {
  let stay = Number(input[0]) - 1;
  let roomType = input[1];
  let grade = input[2];
  let roomPrice = 0;
  let tripPrice = 0;
  if (roomType === 'room for one person') {
    roomPrice = 18.00;
    tripPrice = stay * roomPrice;
    if (grade === 'positive') {
      tripPrice += (0.25 * tripPrice);
    } else if (grade === 'negative') {
      tripPrice -= (0.10 * tripPrice);
    }
  } else if (roomType === 'apartment') {
    roomPrice = 25.00;
    tripPrice = stay * roomPrice;
    if (stay < 10) {
      tripPrice -= (0.30 * tripPrice);
    } else if (stay >= 10 && stay <= 15) {
      tripPrice -= (0.35 * tripPrice);
    } else if (stay > 15) {
      tripPrice -= (0.50 * tripPrice);
    }
    if (grade === 'positive') {
      tripPrice += (0.25 * tripPrice);
    } else if (grade === 'negative') {
      tripPrice -= (0.10 * tripPrice);
    }
  } else if (roomType === 'president apartment') {
    roomPrice = 35.00;
    tripPrice = stay * roomPrice;
    if (stay < 10) {
      tripPrice -= (0.10 * tripPrice);
    } else if (stay >= 10 && stay <= 15) {
      tripPrice -= (0.15 * tripPrice);
    } else if (stay > 15) {
      tripPrice -= (0.20 * tripPrice);
    }
    if (grade === 'positive') {
      tripPrice += (0.25 * tripPrice);
    } else if (grade === 'negative') {
      tripPrice -= (0.10 * tripPrice);
    }
  }
  console.log(tripPrice.toFixed(2));
}
trip([14, 'apartment', 'positive']);