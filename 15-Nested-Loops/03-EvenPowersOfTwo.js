function evenPowersOfTwo(num) {
  let currentNum = 1;
  for (let i = 0; i <= Number(num[0]); i += 2) {
    console.log(currentNum);
    currentNum *= 4;
  }
}
evenPowersOfTwo([2]);