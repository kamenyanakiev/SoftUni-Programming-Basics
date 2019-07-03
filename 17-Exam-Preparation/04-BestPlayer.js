function bestPlayer(input) {
  let player = '';
  let goals = 0;
  let maxGoals = 0;
  let maxPlayer = '';
  for (let i = 0; i < input.length; i += 2) {
    if (input[i] === 'END') {
      break;
    }
    player = input[i];
    goals = Number(input[i + 1]);
    if (goals > maxGoals) {
      maxGoals = goals;
      maxPlayer = player;
      if (goals > 10) {
        break;
      }
    }
  }
  console.log(`${maxPlayer} is the best player!`);
  if (maxGoals >= 3) {
    console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${maxGoals} goals.`);
  }
}
bestPlayer(['Neymar', 2, 'Ronaldo', 1, 'Messi', 3, 'END']);