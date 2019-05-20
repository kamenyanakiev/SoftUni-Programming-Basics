function swimmingRecord(input) {
  let record = Number(input[0]);
  let tryTime = Number(input[1]) * Number(input[2]);
  let slowDown = Math.floor(Number(input[1]) / 15); 
  slowDown = slowDown * 12.5;
  tryTime += slowDown;
  if(tryTime >= record){
    console.log(`No, he failed! He was ${(tryTime - record).toFixed(2)} seconds slower.`);
  } else {
    console.log(`Yes, he succeeded! The new world record is ${(tryTime).toFixed(2)} seconds.`);
  }
}
swimmingRecord([55555.67, 3017, 5.03]);