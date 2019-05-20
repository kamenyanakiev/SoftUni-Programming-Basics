function danceHall(input) {
  let hallLenght = Number(input[0]);
  let hallHeight = Number(input[1]);
  let wardrobeSide = Number(input[2]);
  let hallArea = (hallLenght * 100) * (hallHeight * 100);
  let wardrobeArea = (wardrobeSide * 100) * (wardrobeSide * 100);
  let bench = hallArea / 10;
  let freeSpace = hallArea - wardrobeArea - bench;
  let totalDancers = freeSpace / (40 + 7000);
  console.log(Math.floor(totalDancers));
}
danceHall([50, 25, 2]);