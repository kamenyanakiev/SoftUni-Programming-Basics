function godzillaVsKong(input) {
  let budget = Number(input[0]);
  let people = Number(input[1]);
  let clothingPerPerson = Number(input[2]);
  let decoration = budget * 0.10;
  let clothingCost = people * clothingPerPerson;
  if (people > 150){
    clothingCost *= 0.90; 
  }
  let totalCost = clothingCost + decoration;

  if(totalCost > budget){
    console.log('Not enough money!');
    console.log(`Wingard needs ${(totalCost - budget).toFixed(2)} leva more.`);
    return;
  } 
  console.log('Action!');
  console.log(`Wingard starts filming with ${(budget - totalCost).toFixed(2)} leva left.`);
}
godzillaVsKong([20000, 120, 55.5]);