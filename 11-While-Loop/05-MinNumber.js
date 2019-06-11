function minNumber(input) {
  input.shift();
  console.log(Math.min.apply(null ,input));
}
minNumber([2, 100, 99]);