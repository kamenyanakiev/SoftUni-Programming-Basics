function renovation(input) {
    let totalArea = Number(input[0]) * Number(input[1]) * 4;
    totalArea -= totalArea * (Number(input[2]) / 100);
    Math.ceil(totalArea);
    for (let i = 3; i < input.length; i++) {
        if (input[i] === 'Tired!') {
            console.log(`${totalArea} quadratic m left.`);
        } else {
            let area = Number(input[i]);
            totalArea -= area;
        }
    }
    if (totalArea < 0) {
        console.log(`All walls are painted and you have ${Math.abs(totalArea)} l paint left!`);
    } else if (totalArea === 0){
        console.log(`All walls are painted! Great job, Pesho!`);
    }
}
renovation([3, 5, 10, 2, 3, 4, "Tired!"]);
