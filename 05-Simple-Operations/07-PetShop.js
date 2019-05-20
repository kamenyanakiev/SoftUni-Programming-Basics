function petShop(input) {
  let dogFood = Number(input[0]) * 2.50;
  let otherFoods = Number(input[1]) * 4;
  console.log(`${(dogFood + otherFoods).toFixed(2)} lv.`);
}
petShop([5, 4]);