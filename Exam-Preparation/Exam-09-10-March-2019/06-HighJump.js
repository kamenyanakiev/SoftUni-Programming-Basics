function highJump(input) {
  let winHeight = Number(input[0]);
  let requiredHeight = winHeight - 30;
  let fail = 0;
  let success = 0;
  for (let i = 1; i < input.length; i++) {
    if (input[i] > requiredHeight && input[i] <= 300) {
      requiredHeight += 5;
      success++;
      fail = 0;
    } else if (input[i] <= requiredHeight && input[i] > 100){
      fail++;
      success++
    }
    if (fail === 3) {
      console.log(`Tihomir failed at ${requiredHeight}cm after ${i} jumps.`);
      break;
    }
  }
  if (fail !== 3) {
    console.log(`Tihomir succeeded, he jumped over ${winHeight}cm after ${success} jumps.`);
  }
}
//highJump([250, 225, 224, 225, 228, 231, 235, 234, 235]);
highJump([231, 205, 212, 213, 228, 229, 230, 235])