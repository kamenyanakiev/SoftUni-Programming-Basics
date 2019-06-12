function examPreparation(input) {
  let poorGrades = 0;
  let breakGrades = Number(input[0]);
  let grade = 0;
  let gradeCounter = 0;
  let totalGrade = 0;
  let pass = true;
  for (let i = 1; i < input.length; i += 2) {
    if (input[i] === 'Enough') {
      break;
    }
    grade = Number(input[i + 1]);
    if (grade <= 4) {
      poorGrades++;
      totalGrade += grade;
    } else {
      totalGrade += grade;
    }
    gradeCounter++;
    if (poorGrades === breakGrades) {
      pass = false;
      break;
    }
  }
  if (pass) {
    console.log(`Average score: ${(totalGrade / gradeCounter).toFixed(2)}`);
    console.log(`Number of problems: ${gradeCounter}`);
    console.log(`Last problem: ${input[gradeCounter * 2 - 1]}`);
  } else {
    console.log(`You need a break, ${poorGrades} poor grades.`);
  }
}
examPreparation([3, 'Money', 6, 'Story', 4, 'Spring Time', 5, 'Bus', 6, 'Enough']);