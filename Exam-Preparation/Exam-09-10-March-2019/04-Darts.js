function darts(input) {
  let points = 301;
  let successCounter = 0;
  let failCounter = 0;
  let player = input[0];
  for (let i = 1; i < input.length; i += 2) {
    let currentPoints = Number(input[i + 1]);
    if (input[i] === 'Retire') {
      break;
    }
    if (input[i] === 'Triple') {
      currentPoints *= 3;
    } else if (input[i] === 'Double') {
      currentPoints *= 2;
    }
    if (currentPoints > points) {
      failCounter++;
    } else if (currentPoints <= points) {
      points -= currentPoints;
      successCounter++;
    }
    if (points === 0) {
      break;
    }
  }
  if (points === 0) {
    console.log(`${player} won the leg with ${successCounter} shots.`);
  } else {
    console.log(`${player} retired after ${failCounter} unsuccessful shots.`);
  }
}
darts(['Michael van Gerwen', 'Triple', 20, 'Triple', 19, 'Double', 10, 'Single', 3, 'Single', 1, 'Triple', 20, 'Triple', 20, 'Double', 20])