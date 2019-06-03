function onTimeForTheExam(input) {
  let examHour = Number(input[0]);
  let examMinute = Number(input[1]);
  let arrivalHour = Number(input[2]);
  let arrivalMinute = Number(input[3]);
  let totalExamMinutes = examHour * 60 + examMinute;
  let totalArrivalMinutes = arrivalHour * 60 + arrivalMinute;
  let totalTime = totalExamMinutes - totalArrivalMinutes;
  if (totalTime < 0) {
    console.log(`Late`);
    if (totalTime > -60) {
      console.log(`${Math.abs(totalTime)} minutes after the start`);
    } else {
      if (totalTime % 60 > -10) {
        console.log(`${Math.abs(parseInt(totalTime / 60))}:0${Math.abs(totalTime % 60)} hours after the start`);
      } else {
        console.log(`${Math.abs(parseInt(totalTime / 60))}:${Math.abs(totalTime % 60)} hours after the start`);
      }
    }
  } else if (totalTime === 0 || totalTime <= 30) {
    console.log(`On time`);
    if (totalTime > 0) {
      console.log(`${Math.abs(totalTime)} minutes before the start`);
    }
  } else if (totalTime > 30) {
    console.log(`Early`);
    if (totalTime < 60) {
      console.log(`${Math.abs(totalTime)} minutes before the start`);
    } else {
      if (totalTime % 60 < 10) {
        console.log(`${Math.abs(parseInt(totalTime / 60))}:0${totalTime % 60} hours before the start`);
      } else {
        console.log(`${Math.abs(parseInt(totalTime / 60))}:${totalTime % 60} hours before the start`);
      }
    }
  }
}
onTimeForTheExam([9, 00, 10, 30]);