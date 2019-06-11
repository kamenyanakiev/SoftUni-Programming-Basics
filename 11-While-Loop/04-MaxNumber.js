function maxNumber(input) {
  input.shift();
  console.log(Math.max.apply(null ,input));
}
maxNumber([2, 100, 99]);