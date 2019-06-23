function building(input) {
  let height = Number(input[0]);
  let length = Number(input[1]);
  for (let i = height; i > 0; i--) {
    let result = "";
    for (let j = 0; j < length; j++) {
      if (i === height) {
        result += "L" + i + j;
        result += " ";
      } else if (i % 2 === 0) {
        result += "O" + i + j;
        result += " ";
      } else {
        result += "A" + i + j;
        result += " ";
      }
    }
    console.log(result);
  }
}
building([6, 4]);