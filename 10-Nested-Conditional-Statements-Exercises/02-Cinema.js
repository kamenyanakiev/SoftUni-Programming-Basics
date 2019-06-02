function cinema(input) {
  let movieType = input[0];
  let rows = Number(input[1]);
  let columns = Number(input[2]);
  let price = getPrice(movieType);
  console.log((price * rows * columns).toFixed(2));

  function getPrice(category) {
    let categories = {
      Premiere: 12,
      Normal: 7.5,
      Discount: 5
    };
    return categories[category];
  }
}
cinema(["Premiere", 10, 12]);
