function numberInArray(input) {
  let numbers = {};
  for (let i = 0; i < input.length; i++) {
    if (numbers[input[i]]) {
      numbers[input[i]]++
    } else {
      numbers[input[i]] = 1;
    }
  }
  for (let key in numbers) {
    console.log(`The number ${key} is repeated ${numbers[key]} times.`);
  }
}
numberInArray([1, 2, 1, 3, 4, 1, 2, 5, 6, 6]);

//Имаме input, който е масив от числа (например [1,1,7,5,4,5,6,7,4,4,4,6,2,4,5,6,7,3]). 
//По колко пъти се повтаря всяко число във входния масив? Output-a трябва да изглежда по следния начин:
//The number 1 is repeated 2 times.
//The number 4 is repeated 5 times.
//Т.н. за всяко число.