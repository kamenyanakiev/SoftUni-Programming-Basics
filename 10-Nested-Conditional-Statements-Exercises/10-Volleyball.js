function volleyball(input) {
  let yearType = input[0];
  let holidays = Number(input[1]);
  let weekendTrips = Number(input[2]);
  let weekendsInSofia = 48 - weekendTrips;
  let gamesInSofia = weekendsInSofia * 0.75;
  let gamesInHometown = weekendTrips;
  let gamesDuringHolidays = holidays * (2 / 3);
  let totalGames = gamesDuringHolidays + gamesInHometown + gamesInSofia;
  if (yearType === 'leap') {
    let result = Math.floor(totalGames + (totalGames * 0.15));
    console.log(result);
  } else {
    console.log(Math.floor(totalGames));
  }
}
volleyball(['normal', 11, 6]);