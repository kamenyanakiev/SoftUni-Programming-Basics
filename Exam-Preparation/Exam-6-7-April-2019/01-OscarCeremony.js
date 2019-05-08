function oscarCeremony(input) {
  let hallPrice = Number(input[0]);
  let statuettes = 0.70 * hallPrice;
  let catering = 0.85 * statuettes;
  let sound = catering / 2;
  let totalPrice = hallPrice + statuettes + catering + sound;
  console.log((totalPrice).toFixed(2));
}
oscarCeremony([3500]);