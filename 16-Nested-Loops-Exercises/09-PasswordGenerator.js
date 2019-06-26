function passwordGenerator(input) {
  let n = Number(input[0]);
  let l = Number(input[1]);
  let result = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= l; k++) {
        for (let p = 1; p <= l; p ++) {
          for (let m = 2; m <= n ; m++) {
            if (m > j && m > i) {
              result += `${i}${j}${String.fromCharCode(96 + k)}${String.fromCharCode(96 + p)}${m} `;
            } 
          }
        }
      }
    }
  }
  console.log(result);
}
passwordGenerator([3, 1]);