function combination(input) {
  let num = Number(input[0]);
  let combination = 0;
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= num; j++) {
      for (let k = 0; k <= num; k++) {
        for (let l = 0; l <= num; l++) {
          for (let m = 0; m <= num; m++) {
            if (i + j + k + l + m === num) {
              combination++;
            }
          }
        }
      }
    }
  }
  console.log(combination);
}
combination([25]);