function giftsFromSanta(input) {
  let result = '';
  for (let i = Number(input[1]); i >= Number(input[0]); i--) {
    if (i % 2 === 0 && i % 3 === 0) {
      if (i === Number(input[2])) {
        break;
      }
      result += `${i} `;
    }
  }
  console.log(result);
}
giftsFromSanta([1, 30, 15]);