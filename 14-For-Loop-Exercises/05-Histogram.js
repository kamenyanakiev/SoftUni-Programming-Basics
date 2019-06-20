function histogram(input) {
  let nums = Number(input[0]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;
  for (let i = 1; i < input.length; i++) {
    let currentNum = Number(input[i]);
    if (currentNum < 200) {
      p1++;
    } else if (currentNum >= 200 && currentNum < 400) {
      p2++;
    } else if (currentNum >= 400 && currentNum < 600) {
      p3++;
    } else if (currentNum >= 600 && currentNum < 800) {
      p4++;
    } else if (currentNum >= 800) {
      p5++;
    }
  }
  console.log(`${(p1 / nums * 100).toFixed(2)}%`);
  console.log(`${(p2 / nums * 100).toFixed(2)}%`);
  console.log(`${(p3 / nums * 100).toFixed(2)}%`);
  console.log(`${(p4 / nums * 100).toFixed(2)}%`);
  console.log(`${(p5 / nums * 100).toFixed(2)}%`);
}
histogram([3, 1, 2, 999]);