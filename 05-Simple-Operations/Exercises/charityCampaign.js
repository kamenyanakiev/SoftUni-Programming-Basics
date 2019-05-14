function charityCampaign(input) {
  let days = Number(input[0]);
  let sweets = Number(input[1]);
  let cakes = Number(input[2]) * 45;
  let waffles = Number(input[3]) * 5.80;
  let pancakes = Number(input[4]) * 3.20;
  let dailySum = (cakes + waffles + pancakes) * sweets;
  let fundsForCampaign = dailySum * days;
  let costs = fundsForCampaign / 8;
  let fundsAfterCosts = fundsForCampaign - costs;
  console.log(fundsAfterCosts.toFixed(2));
}
charityCampaign([20, 8, 14, 30, 16]);