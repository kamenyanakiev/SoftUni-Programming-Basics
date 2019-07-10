function shopping(input) {
    let buget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);
    let videoCardsPrice = videoCards * 250;
    let processorPrice = processors * (videoCardsPrice * 0.35);
    let ramPrice = ram * (videoCardsPrice * 0.10);
    let totalPrice = processorPrice + ramPrice + videoCardsPrice;
    if (videoCards > processors) {
        totalPrice *= 0.85;
    }
    if (buget >= totalPrice) {
        console.log(`You have ${(buget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - buget).toFixed(2)} leva more!`);
    }
}
shopping([900, 2, 1, 3]);