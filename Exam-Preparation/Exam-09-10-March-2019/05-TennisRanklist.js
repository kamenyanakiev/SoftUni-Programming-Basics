function tennisRanklist(input) {
  let tours = {
    won: 0,
    w: 2000,
    f: 1200,
    sF: 720,
    totalPoints: 0,
  }
  for (let i = 2; i < input.length; i++) {
    if (input[i] === 'W'){
      tours.won++;
      tours.totalPoints += tours.w;
    } else if (input[i] === 'F'){
      tours.totalPoints += tours.f;
    } else if (input[i] === 'SF'){
      tours.totalPoints += tours.sF;
    }
  }
  console.log(`Final points: ${tours.totalPoints + Number(input[1])}`);
  console.log(`Average points: ${Math.floor((tours.totalPoints / Number(input[0])))}`);
  console.log(`${((tours.won  / Number(input[0]) * 100).toFixed(2))}%`);
}
tennisRanklist([5, 1400, 'F', 'SF', 'W', 'W', 'SF']);