function fishingBoat(input) {
    let buget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let price = 0;
    if (season === 'Spring'){
        price = 3000;
    } else if (season === 'Summer' || season === 'Autumn'){
        price = 4200;
    } else if (season === 'Winter'){
        price = 2600;
    }
    if (fishermen <= 6){
        price *= 0.90;
    } else if (fishermen >= 7 && fishermen <= 11){
        price *= 0.85;
    } else if (fishermen >= 12){
        price *= 0.75;
    }
    if (fishermen % 2 === 0 && season !== 'Autumn'){
        price *= 0.95;
    }
    if (price > buget) {
        console.log(`Not enough money! You need ${(price - buget).toFixed(2)} leva.`);
    } else {
        console.log(`Yes! You have ${(buget - price).toFixed(2)} leva left.`);
    }
}
fishingBoat([3000, 'Summer', 11])