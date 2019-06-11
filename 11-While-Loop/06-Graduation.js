function graduation(input) {
  let student = input[0];
  let grades = 0;
  let counter = 1;
  for (let i = 1; counter <= 12; i++) {
    if(Number(input[i]) >= 4){
      grades += Number(input[i]);
      counter++;
    }
  }
  grades /= 12;
  if (grades >= 4){
    console.log(`${student} graduated. Average grade: ${grades.toFixed(2)}`);
  } 
}
graduation(['Pesho', 4, 5.5, 6, 5.43, 4.5, 6, 5.55, 5, 6, 6, 5.43, 5]);
