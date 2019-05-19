function areaOfFigures(input) {
    switch (input[0]) {
        case 'square':
            console.log(input[1] * input[1]);
            break;
        case 'rectangle':
            console.log(input[1] * input[2]);
            break;
        case 'circle':
            console.log(Math.PI * input[1] * input[1]);
            break;
        case 'triangle':
            console.log(0.5 * input[1] * input[2]);
            break;
        default:
            break;
    }
}
areaOfFigures(['square', 5]);