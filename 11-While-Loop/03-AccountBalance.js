function accountBalance(input) {
  let total = 0;
  for (let i = 1; i < input.length; i++) {
    if (Number(input[i]) > 0){
      console.log(`Increase: ${(Number(input[i]).toFixed(2))}`);
      total += Number(input[i]);
    }
    else {
      console.log(`Invalid operation!`); 
      break;
    }
  }
  console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance([3, 5.51, 69.42, 100])