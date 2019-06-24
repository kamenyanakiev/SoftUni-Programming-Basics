function matrix(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let c = Number(input[2]);
  let d = Number(input[3]);
  for (let i = a; i <= b; i++) {
    for (let j = a; j <= b; j++) {
      for (let k = c; k <= d; k++) {
        for (let l = c; l <= d; l++) {
          if ((i + l) === (j + k) && i !== j && k !== l) {
            console.log(`${i}${j}`);
            console.log(`${k}${l}`);
            console.log(``);
          }
        }
      }
    }
  }
}
matrix([1, 2, 3, 4]);