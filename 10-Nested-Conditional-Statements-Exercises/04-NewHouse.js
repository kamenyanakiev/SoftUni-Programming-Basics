function newHouse(input) {
  let flowers = input[0];
  let numberOfFlowers = Number(input[1]);
  let buget = Number(input[2]);
  let price = 0;
  if (flowers === "Roses") {
    price = 5 * numberOfFlowers;
    if (numberOfFlowers > 80) {
      price *= 0.9;
    }
  } else if (flowers === "Dahlias") {
    price = 3.8 * numberOfFlowers;
    if (numberOfFlowers > 90) {
      price *= 0.85;
    }
  } else if (flowers === "Tulips") {
    price = 2.8 * numberOfFlowers;
    if (numberOfFlowers > 80) {
      price *= 0.85;
    }
  } else if (flowers === "Narcissus") {
    price = 3 * numberOfFlowers;
    if (numberOfFlowers < 120) {
      price *= 1.15;
    }
  } else if (flowers === "Gladiolus") {
    price = 2.5 * numberOfFlowers;
    if (numberOfFlowers < 80) {
      price *= 1.2;
    }
  }
  if (price > buget) {
    console.log(`Not enough money, you need ${(price - buget).toFixed(2)} leva more.`);
  } else {
    console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${(buget - price).toFixed(2)} leva left.`);
  }
}
newHouse(["Tulips", 88, 260]);
