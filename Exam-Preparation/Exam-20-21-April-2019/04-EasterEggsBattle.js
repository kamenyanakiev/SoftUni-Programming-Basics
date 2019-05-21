function easterEggsBattle(input) {
  let playerOne = {
    eggs: Number(input[0])
  }
  let playerTwo = {
    eggs: Number(input[1])
  }
  for (let i = 2; i < input.length; i++) {
    if (playerOne.eggs === 0 || playerTwo.eggs === 0) {
      break;
    }
    if (input[i] === 'one') {
      playerTwo.eggs--;
    } else if (input[i] === 'two') {
      playerOne.eggs--;
    } else if (input[i] === 'End of battle') {
      break;
    }
  }
  if (playerOne.eggs > 0 && playerTwo.eggs > 0) {
    console.log(`Player one has ${playerOne.eggs} eggs left.`);
    console.log(`Player two has ${playerTwo.eggs} eggs left.`);
  } else if (playerOne.eggs === 0 && playerTwo.eggs > 0) {
    console.log(`Player one is out of eggs. Player two has ${playerTwo.eggs} eggs left.`);
  } else if (playerTwo.eggs === 0 && playerOne.eggs > 0) {
    console.log(`Player two is out of eggs. Player one has ${playerOne.eggs} eggs left.`);
  }
}
easterEggsBattle([5, 4, 'one', 'two', 'one', 'two', 'two', 'End of battle']);