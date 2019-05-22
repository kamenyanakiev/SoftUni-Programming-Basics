function easterCompetition(input) {
  let maxCompetitor = input[1];
  let maxCompetitorPoints = 0
  let currentCompetitorPoints = 0;
  let pointsCounter = 0;
  for (let i = 2; i < input.length; i++) {
    pointsCounter++;
    let currentCompetitor = input[i - pointsCounter];
    if (input[i] === 'Stop') {
      console.log(`${currentCompetitor} has ${currentCompetitorPoints} points.`);
      currentCompetitor = input[i - pointsCounter - 1];
      if (currentCompetitorPoints > maxCompetitorPoints) {
        maxCompetitor = input[i - pointsCounter];
        maxCompetitorPoints = currentCompetitorPoints;
        console.log(`${maxCompetitor} is the new number 1!`);
      }
      i += 2;
      pointsCounter = 1;
      currentCompetitorPoints = 0;
    }
    currentCompetitorPoints += Number(input[i]);
  }
  console.log(`${maxCompetitor} won competition with ${maxCompetitorPoints} points!`);
}
easterCompetition([3, 'Chef Manchev', 10, 10, 10, 10, 'Stop', 'Natalie', 8, 2, 9, 'Stop', 'George', 9, 2, 4, 2, 'Stop']);