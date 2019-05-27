function basketballTournaments(input) {
  let tournament = input[0];
  let tournaments = 1;
  let firstPoints = 0;
  let secondPoints = 0;
  let won = 0;
  let lost = 0;
  let game = 1;
  let tourGames = 0;
  for (let i = 2; i < input.length; i += 2) {
    if (input[i] === 'End of tournaments'){
      break;
    }
    firstPoints = Number(input[i]);
    secondPoints = Number(input[i + 1])
    if (firstPoints > secondPoints){
      console.log(`Game ${game} of tournament ${tournament}: win with ${firstPoints - secondPoints} points.`);
      game++;
      won++;
      tourGames++;
    } else if (firstPoints < secondPoints){
      console.log(`Game ${game} of tournament ${tournament}: lost with ${secondPoints - firstPoints} points.`);
      game++;
      lost++;
      tourGames++;
    }
    if (input[i].length > 3){
      tournament = input[i];
      tournaments++;
      game = 1;
    }
  }
  console.log(`${(won * 100 / tourGames).toFixed(2)}% matches win`);
  console.log(`${(lost * 100 / tourGames).toFixed(2)}% matches lost`);
}
basketballTournaments(['Dunkers', 2, 75, 65, 56, 73, 'Fire Girls', 3, 67, 34, 83, 98, 66, 45, 'End of tournaments']);