function cake(input) {
  let totalSize = Number(input[0]) * Number(input[1]);
  let totalTaken = 0;
  let moreTaken = false;
  for (let i = 2; i < input.length; i++) {
    if (input[i] === 'STOP') {
      break;
    } else {
      totalTaken += Number(input[i]);
    }
    if (totalTaken > totalSize) {
      moreTaken = true;
      break;
    }
  }
  if (moreTaken) {
    console.log(`No more cake left! You need ${totalTaken - totalSize} pieces more.`);
  } else {
    console.log(`${totalSize - totalTaken} pieces are left.`);
  }
}
cake([10, 10, 20, 20, 20, 20, 21]);