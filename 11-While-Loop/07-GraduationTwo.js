function graduationTwo(input) {
  let student = input[0];
  let grades = 0;
  let counter = 1;
  let fail = 0;
  for (let i = 1; counter <= 12; i++) {
    if (Number(input[i]) >= 4) {
      grades += Number(input[i]);
      counter++;
    } else {
      fail++;
    }
    if (fail === 2) {
      console.log(`${student} has been excluded at ${i-1} grade`);
      break;
    }
  }
  grades /= 12;
  if (grades >= 4 && fail <= 1) {
    console.log(`${student} graduated. Average grade: ${grades.toFixed(2)}`);
  }
}
graduationTwo(['Gosho', 5, 6, 5, 6, 5, 6, 6, 2, 3]);