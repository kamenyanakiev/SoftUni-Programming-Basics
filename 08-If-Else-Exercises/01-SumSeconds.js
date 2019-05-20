function sumSeconds(input) {
  let firstResult = Number(input[0]);
  let secondResult = Number(input[1]);
  let thirdResult = Number(input[2]);
  let totalResults = firstResult + secondResult + thirdResult;
  let minutes = Math.floor(totalResults / 60);
  let seconds = totalResults % 60;
  if (seconds < 10) {
    console.log(minutes + ":0" + seconds);
  } else {
    console.log(minutes + ":" + seconds);
  }
}
sumSeconds([35,45,44])