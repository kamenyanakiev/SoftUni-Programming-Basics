function easterLunch(input) {
  let kozunak = Number(input[0]) * 3.20;
  let eggs = Number(input[1]) * 4.35;
  let cookies = Number(input[2]) * 5.40;
  let eggColoring = (12 * Number(input[1])) * 0.15;
  console.log((kozunak + eggs + cookies + eggColoring).toFixed(2));
}
easterLunch([3, 2, 3]);