function trainTheTrainers(input) {
  let numberOfGrades = Number(input[0]);
  input.shift();
  let totalGrade = 0;
  let gradeCounter = 0;
  for (let i = 0; i < input.length; i += numberOfGrades + 1) {
    if (input[i] === 'Finish') {
      break;
    }
    let assesment = input[i];
    let assesmentGrade = 0;
    for (let j = i + 1; j <= i + numberOfGrades; j++) {
      assesmentGrade += Number(input[j]);
      totalGrade += Number(input[j]);
      gradeCounter++;
    }
    console.log(`${assesment} - ${(assesmentGrade / numberOfGrades).toFixed(2)}.`);
  }
  console.log(`Student's final assessment is ${(totalGrade / gradeCounter).toFixed(2)}.`);
}
trainTheTrainers([2, 'While-Loop', 6.00, 5.50, 'For-Loop', 5.84, 5.66, 'Finish']);