function ticketCombination(input) {
  let counter = 0;
  for (let i = 'B'.charCodeAt(0); i <= 'L'.charCodeAt(0); i += 2) {
    for (let j = 'f'.charCodeAt(0); j >= 'a'.charCodeAt(0); j--) {
      for (let k = 'A'.charCodeAt(0); k <= 'C'.charCodeAt(0); k++) {
        for (let l = 1; l <= 10; l++) {
          for (let m = 10; m >= 1; m--) {
            counter++;
            if (counter === Number(input[0])) {
              console.log(`Ticket combination: ${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)}${l}${m}`);
              console.log(`Prize: ${i + j + k + l + m} lv.`);
            }
          }
        }
      }
    }
  }
}
ticketCombination([17]);