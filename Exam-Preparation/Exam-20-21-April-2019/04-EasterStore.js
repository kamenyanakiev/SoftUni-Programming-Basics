function easterStore(input) {
  let eggsInStore = Number(input[0]);
  let bought = 0;
  for (let i = 1; i < input.length; i+=2) {
    if (input[i] === 'Fill'){
      eggsInStore += Number(input[i+1]);
      i+=2;
    }
    let buy = Number(input[i+1]);
    if(eggsInStore < buy){
      console.log(`Not enough eggs in store!`);
      console.log(`You can buy only ${eggsInStore}.`);
      break;
    }
    if (input[i] === 'Buy'){
      eggsInStore -= buy;
      bought += buy;
    }  else if (input[i] === 'Close'){
      console.log(`Store is closed!`);
      console.log(`${bought} eggs sold.`); 
      break;     
    }
  }
}
easterStore([20, 'Fill', 30, 'Buy', 15, 'Buy', 20, 'Close']);