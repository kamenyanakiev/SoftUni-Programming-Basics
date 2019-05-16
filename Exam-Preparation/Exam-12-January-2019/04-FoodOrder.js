function foodOrder(input) {
  let buget = Number(input[0]);
  let cost = 2.50;
  let itemCost = 0;
  let totalItemCost= 0 ;
  let item = 0;
  let itemCounter = 0;
  for (let i = 1; i <= input.length; i+=2) {
    item = input[i];
    if(item === 'Order'){
      break;
    }
    itemCost = Number(input[i+1]);
    totalItemCost+=itemCost;
    itemCounter++;
    cost+=itemCost;
    if(cost > buget){
      console.log(`You will exceed the budget if you order this!`);
      cost -= input[i+1]
      itemCounter--;
    }
  }
  console.log(`You ordered ${itemCounter} items!`);
  console.log(`Total: ${(cost).toFixed(2)}`);
}
foodOrder([25.00, 'Soup', 3.50, 'Salad', 7.80, 'Fish', 9.00, 'Cake', 5.00, 'Ice cream', 2.00, 'Order']);
//foodOrder([30, 'Salad', 5.50, 'Steak', 7.90, 'Potatoes', 4.50, 'Order'])