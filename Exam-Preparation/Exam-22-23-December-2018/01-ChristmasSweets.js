  function christmasSweets(input) {
    let shtolenPrice = Number(input[2]) * (Number(input[0]) * 1.60);
    let candyPrice = Number(input[3]) * (Number(input[1]) * 1.80);
    let buiscuitPrice = Number(input[4]) * 7.50;
    console.log((shtolenPrice + candyPrice  + buiscuitPrice).toFixed(2));
  }
  christmasSweets([6.90, 4.20, 1.5, 2.5, 1]);