function passwordGenerator(input) {
  let n = Number(input[0]);
  let l = Number(input[1]);
  let result = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= l; k++) {
        for (let p = 1; p <= l; p ++) {
          for (let m = 2; m < n ; m++) {
            if (i + 1 > n || j + 1 > n){
              continue;
            }
            if (i > j) {
              result += `${i}${j}${String.fromCharCode(96 + k)}${String.fromCharCode(96 + p)}${i + 1} `;
            } else if (j > i) {
              result += `${i}${j}${String.fromCharCode(96 + k)}${String.fromCharCode(96 + p)}${j + 1} `;
            } else if (i === j){
              result += `${i}${j}${String.fromCharCode(96 + k)}${String.fromCharCode(96 + p)}${i + 1} `;
            }
          }
        }
      }
    }
  }
  console.log(result);
}
passwordGenerator([3, 1]);