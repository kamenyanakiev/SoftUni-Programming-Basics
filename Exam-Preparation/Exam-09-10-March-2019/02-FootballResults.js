function footballResults(input) {
  let wonGames = 0;
  let lostGames = 0;
  let drawGames = 0;
  for (let i = 0; i < input.length; i++) {
  let firstNumber = Number(input[i].charAt(0));
  let secondNumber = Number(input[i].charAt(2));
    if(firstNumber > secondNumber){
      wonGames++;
    } else if (secondNumber > firstNumber){
      lostGames++;
    } else {
      drawGames++;
    }
  }
  console.log(`Team won ${wonGames} games.`);
  console.log(`Team lost ${lostGames} games.`);
  console.log(`Drawn games: ${drawGames}`);
}
footballResults(['3:1', '0:2', '0:0']);