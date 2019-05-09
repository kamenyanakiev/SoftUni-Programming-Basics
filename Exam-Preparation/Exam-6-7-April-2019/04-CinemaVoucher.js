function cinemaVoucher(input) {
  let voucher = Number(input[0]);
  let sum = 0;
  let tickets = 0;
  let otherProducts = 0;
  for (let i = 1; i < input.length; i++) {
    let firstChar = input[i].charCodeAt(0);
    let secondChar = input[i].charCodeAt(1);
    if (input[i] === 'End'){
      break;
    }
    if(input[i].length > 8){
      sum += firstChar + secondChar;
      if (sum > voucher){
        break;
      }
      tickets++;
    } else if (input[i].length <= 8){
      sum += firstChar;
      if (sum > voucher){
        break;
      }
      otherProducts++;
    } if (input[i] === 'End'){
      break;
    }
  }
  console.log(tickets);
  console.log(otherProducts);
}
cinemaVoucher([300, 'Captain Marvel', 'popcorn', 'Pepsi'])