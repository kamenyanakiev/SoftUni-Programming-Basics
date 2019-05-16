function exam(input) {
  let students = Number(input[0]);
  let fail = 0;
  let three = 0;
  let four = 0;
  let fivePlus = 0;
  let currentGrade = 0;
  let totalGrade = 0;
  for (let i = 1; i < input.length; i++) {
    currentGrade = Number(input[i]);
    if(currentGrade < 3.00){
      fail++;
    } else if(currentGrade >= 3.00 && currentGrade <= 3.99){
      three++;
    } else if(currentGrade >= 4.00 && currentGrade <= 4.99){
      four++;
    } else if(currentGrade >= 5.00){
      fivePlus++;
    }
    totalGrade += currentGrade;
  }
  console.log(`Top students: ${(((fivePlus + students) - students)*10).toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${(((four + students) - students)*10).toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${(((three + students) - students)*10).toFixed(2)}%`);
  console.log(`Fail: ${(((fail + students) - students)*10).toFixed(2)}%`);
  console.log(`Average: ${(totalGrade / students).toFixed(2)}`);
}
exam([10, 3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5]);