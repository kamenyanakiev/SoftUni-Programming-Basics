function delivery(input){
  let chicken = 10.35;
  let fish = 12.40;
  let veggie = 8.15;
  let dessert = 0.20;
  let deliveryPrice = 2.50;
  let price = 0;
  price = (chicken * input[0]) + (fish * input[1]) + (veggie * input[2]);
  price = price + (price * dessert);
  price += deliveryPrice;
  console.log(`Total: ${price.toFixed(2)}`);
}
delivery ([2, 4, 3]);