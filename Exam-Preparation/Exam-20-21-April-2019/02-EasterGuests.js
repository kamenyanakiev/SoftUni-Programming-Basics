function easterGuests(input) {
  let guests = Number(input[0]);
  let buget = Number(input[1]);
  let kozunak = Math.ceil(guests / 3);
  let kozunakPrice = kozunak *4 ;
  let eggs = guests * 2;
  let eggsPrice = eggs * 0.45;
  let price = eggsPrice + kozunakPrice;
  if(price > buget){
    console.log(`Lyubo doesn't have enough money.`);
    console.log(`He needs ${(Math.abs(price - buget)).toFixed(2)} lv. more.`);
  }else if(buget >= price){
    console.log(`Lyubo bought ${kozunak} Easter bread and ${eggs} eggs.`);
    console.log(`He has ${(buget - price).toFixed(2)} lv. left.`);
  }
}
easterGuests([10, 35]);