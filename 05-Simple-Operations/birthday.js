function birthday(input) {
  let litres = (input[0] * input[1] * input[2]) * 0.001;
  let percentage = input[3] * 0.01;
  let totalLitres = litres * (1-percentage);
  console.log(totalLitres.toFixed(3));
}
birthday([85, 75, 47, 17]);