function circleAreaAndPerimeter(input) {
  let area = Math.PI * (input[0] * input[0]);
  let perimeter = 2 * Math.PI * input[0];
  console.log(area.toFixed(2));
  console.log(perimeter.toFixed(2));
}
circleAreaAndPerimeter([3]);