function numberWars(input) {
  let player1 = input[0];
  let player2 = input[1];
  let player1Card;
  let player2Card;
  let player1Points = 0;
  let player2Points = 0;
  for (let i = 2; i < input.length; i += 2) {
    if (input[i] === 'End of game') {
      console.log(`${player1} has ${player1Points} points`);
      console.log(`${player2} has ${player2Points} points`);
      break;
    }
    player1Card = Number(input[i]);
    player2Card = Number(input[i + 1]);
    if (player1Card > player2Card) {
      player1Points = player1Points + (player1Card - player2Card);
    } else if (player2Card > player1Card) {
      player2Points = player2Points + (player2Card - player1Card);
    } else if (player1Card === player2Card) {
      player1Card = Number(input[i + 2]);
      player2Card = Number(input[i + 3]);
      console.log('Number wars!');
      if (player1Card > player2Card) {
        console.log(`${player1} is winner with ${player1Points} points`);
      } else if (player2Card > player1Card) {
        console.log(`${player2} is winner with ${player2Points} points`);
      }
    }
  }
}
numberWars(['Desi', 'Niki', 7, 5, 3, 4, 3, 3, 5, 3]);