function TwoDRectangle(input) {
  let length = Math.abs(input[0] - input[2]);
  let heigth = Math.abs(input[1] - input[3]);
  let perimeter = 2* (length + heigth);
  let area = length * heigth;
  console.log(area.toFixed(2));
  console.log(perimeter.toFixed(2));
}
TwoDRectangle ([60, 20, 10, 50]);