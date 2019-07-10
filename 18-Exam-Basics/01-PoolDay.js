function poolDay(input) {
    let people = Number(input[0]);
    let poolPrice = Number(input[1]) * people;
    let umbrellaPrice = Number(input[2]) * Math.ceil(people * 0.75);
    let chairPrice = Number(input[3]) * Math.ceil(people / 2); 
    let totalPrice = poolPrice + chairPrice + umbrellaPrice;
    console.log(`${totalPrice.toFixed(2)} lv.`);
}
poolDay([21, 5.50, 4.40, 6.20]);