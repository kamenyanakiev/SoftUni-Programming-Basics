function movieRatings(input) {
  let minRatingMovie = input[1];
  let maxRatingMovie = input[1];
  let totalRating = Number(input[2]);
  let maxRating = Number(input[2]);
  let minRating = Number(input[2]);
  for (let i = 3; i < input.length; i+=2) {
    if (input[i+1] > maxRating){
      maxRating = input[i+1];
      maxRatingMovie = input[i];
    } else if (input[i+1] < minRating){
      minRating = input[i+1]
      minRatingMovie = input[i];
    }
    totalRating += Number(input[i+1]);
  }
  console.log(`${maxRatingMovie} is with highest rating: ${maxRating}`);
  console.log(`${minRatingMovie} is with lowest rating: ${minRating}`);
  console.log(`Average rating: ${(totalRating/input[0]).toFixed(1)}`);
}
movieRatings([5, 'A Star is Born', 7.8, 'Creed 2', 7.3, 'Mary Poppins', 7.2, 'Vice', 7.2, 'Captain Marvel', 7.1]);