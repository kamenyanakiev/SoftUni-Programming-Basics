function cinemaTickets(input) {
  let movie = input[0];
  let standard = 0;
  let student = 0;
  let kid = 0;
  let totalPlaces = input[1];
  let currentMovie = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 2; j < input.length; j++) {
      if (input[j] === 'End'){
        break
      } else if (input[j] === 'Finish'){
        break;
      }
      if (input[j] === 'standard'){
        standard++;
      } else if (input[j === 'kid']){
        kid++;
      } else if (input[j] === 'student'){
        student++
      }
      currentMovie++;
    }
    i+= currentMovie;
  }
  console.log(standard);
  
}
cinemaTickets(['Taxi', 10, 'standard', 'kid', 'student', 'student', 'standard', 'standard', 'End', 'Scary Movie', 
6, 'student', 'student', 'student', 'student', 'student', 'student', 'Finish']);