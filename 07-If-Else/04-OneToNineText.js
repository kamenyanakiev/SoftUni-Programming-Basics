function oneToNineText(input) {
    let number = input[0];
    let numbers = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    }
    if (numbers[number]) {
        console.log(numbers[number]);
    } else {
        console.log('number too big');
    }
}
oneToNineText([4]);