function cookieFactory(input) {
  let products = {
    flour: 0,
    eggs: 0,
    sugar: 0
  }
  let batches = 0;
  for (let i = 1; i <= input.length; i++) {
    if (input[i] === 'flour') {
      products.flour++;
    } else if (input[i] === 'eggs') {
      products.eggs++;
    } else if (input[i] === 'sugar') {
      products.sugar++;
    } else if (input[i] === 'Bake!') {
      if (products.sugar < 1 || products.eggs < 1 || products.flour < 1) {
        console.log('The batter should contain flour, eggs and sugar!');
      } else {
        batches++;
        console.log(`Baking batch number ${batches}...`);
        products.sugar -= 1;
        products.eggs -= 1;
        products.flour -= 1;
      }
    }
    if (batches === Number(input[0])) {
      break;
    }
  }
}
cookieFactory([3, 'flour', 'eggs', 'jam', 'Bake!', 'sugar', 'Bake!', 'flour', 'eggs', 'milk', 'almonds', 'sugar', 'Bake!', 'flour', 'eggs', 'sugar', 'Bake!']);