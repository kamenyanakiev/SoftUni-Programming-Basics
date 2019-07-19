function coffeeMachine(input) {
    let coffeeType = input[0];
    let sugar = input[1];
    let numberOfCups = Number(input[2]);
    let price = 0;
    if (coffeeType === 'Espresso') {
        if (sugar === 'Without'){
            price = numberOfCups * 0.9;
        } else if (sugar === 'Normal'){
            price = numberOfCups * 1;
        } else if (sugar === 'Extra'){
            price = numberOfCups * 1.2;
        }
    } else if (coffeeType === 'Cappuccino') {
        if (sugar === 'Without'){
            price = numberOfCups * 1;
        } else if (sugar === 'Normal'){
            price = numberOfCups * 1.2;
        } else if (sugar === 'Extra'){
            price = numberOfCups * 1.6;
        }
    } else if (coffeeType === 'Tea') {
        if (sugar === 'Without'){
            price = numberOfCups * 0.5;
        } else if (sugar === 'Normal'){
            price = numberOfCups * 0.6;
        } else if (sugar === 'Extra'){
            price = numberOfCups * 0.7;
        }
    }
    if (sugar === 'Without') {
        price *= 0.65;
    }
    if (coffeeType === 'Espresso' && numberOfCups >= 5) {
        price *= 0.75;
    }
    if (price > 15) {
        price *= 0.80;
    }
    console.log(`You bought ${numberOfCups} cups of ${coffeeType} for ${price.toFixed(2)} lv.`);
}
coffeeMachine(['Espresso', 'Without', 10]);