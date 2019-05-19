function dayOfWeek(input) {
    let day = input[0];
    let days = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday',
    }
    if (days[day]){
        console.log(days[day]);
    } else {
        console.log('Error');
    }
}
dayOfWeek([1])