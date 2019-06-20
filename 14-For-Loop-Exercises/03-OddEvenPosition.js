function oddEvenPosition(input) {
  let oddSum = 0;
  let oddMin = Number.MAX_SAFE_INTEGER;
  let oddMax = Number.MIN_SAFE_INTEGER;
  let evenSum = 0;
  let evenMin = Number.MAX_SAFE_INTEGER;
  let evenMax = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < input.length; i++) {
    let num = Number(input[i]);
    if (i % 2 === 0) {
      evenSum += num;
      if (num > evenMax) {
        evenMax = num;
      }
      if (num < evenMin) {
        evenMin = num;
      }
    } else {
      oddSum += num;
      if (num > oddMax) {
        oddMax = num;
      }
      if (num < oddMin) {
        oddMin = num;
      }
    }
  }
  console.log(`OddSum=${oddSum.toFixed(2)},`);
  if (oddMin === Number.MAX_SAFE_INTEGER) {
    console.log(`OddMin=No,`);
  } else {
    console.log(`OddMin=${oddMin.toFixed(2)},`);
  }
  if (oddMax === Number.MIN_SAFE_INTEGER) {
    console.log(`OddMax=No,`);
  } else {
    console.log(`OddMax=${oddMax.toFixed(2)},`);
  }
  console.log(`EvenSum=${evenSum.toFixed(2)},`);
  if (evenMin === Number.MAX_SAFE_INTEGER) {
    console.log(`EvenMin=No,`);
  } else {
    console.log(`EvenMin=${evenMin.toFixed(2)},`);
  }
  if (evenMax === Number.MIN_SAFE_INTEGER) {
    console.log(`EvenMax=No`);
  } else {
    console.log(`EvenMax=${evenMax.toFixed(2)}`);
  }
}
oddEvenPosition([1, 1]);