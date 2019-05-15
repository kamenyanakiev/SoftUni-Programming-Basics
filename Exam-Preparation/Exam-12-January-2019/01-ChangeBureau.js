function changeBureau(input) {
  let bitcoin = Number(input[0]);
  let chineseYuan = Number(input[1]);
  let commision = Number(input[2]);
  let sumLeva = bitcoin * 1168;
  let sumDollar = chineseYuan * 0.15;
  sumLeva = sumLeva + (sumDollar * 1.76);
  let sumEuro = sumLeva/1.95;
  sumEuro = sumEuro - (sumEuro * (commision/100));
  console.log(sumEuro.toFixed(2));
}
changeBureau([1, 5, 5]);