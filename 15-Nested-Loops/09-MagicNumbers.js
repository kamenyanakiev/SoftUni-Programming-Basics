function magicNumbers(input) {
  let number = Number(input[0]);
  let result = '';
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      for (let k = 1; k < 10; k++) {
        for (let l = 1; l < 10; l++) {
          for (let m = 1; m < 10; m++) {
            for (let n = 1; n < 10; n++) {
              if (i * j * k * l * m * n === number) {
                result +=`${i}${j}${k}${l}${m}${n} `;
              }
            }
          }
        }
      }
    }
  }
  console.log(result);
}
magicNumbers(['2']);