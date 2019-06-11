function moving(input) {
  let space = Number(input[0]) * Number(input[1]) * Number(input[2]);
  let neededSpace = 0;
  for (let i = 3; i < input.length; i++) {
    if(input[i] === 'Done'){
      break;
    }
    neededSpace += Number(input[i]);
  }
  if (space > neededSpace){
    console.log(`${space - neededSpace} Cubic meters left.`);
  } else {
    console.log(`No more free space! You need ${neededSpace - space} Cubic meters more.`);
  }
}
moving([10, 10, 2, 20, 20, 20, 20, 122]);