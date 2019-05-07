function divisonWithout(input) {
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let number = 0;
  for (let i = 1; i <= input[0]; i++) {
    number = input[i];
    if (number % 2 === 0){
      p1++;
    }
    if (number % 3 === 0){
      p2++;
    }
    if (number % 4 === 0){
      p3++;
    }
  }
  console.log(`${(p1/input[0]*100).toFixed(2)}%`);
  console.log(`${(p2/input[0]*100).toFixed(2)}%`);
  console.log(`${(p3/input[0]*100).toFixed(2)}%`);
}
divisonWithout ([3,3,6,9])