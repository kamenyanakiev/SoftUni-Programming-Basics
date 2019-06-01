function fruitOrVegetable(input) {
  let what = input[0];
  if (what === 'banana' || what === 'apple' || what === 'kiwi' || what === 'cherry' || what === 'lemon' || what === 'grapes') {
    console.log('fruit');
  } else if (what === 'tomato' || what === 'cucumber' || what === 'pepper' || what === 'carrot') {
    console.log('vegetable');
  } else {
    console.log('unknown');
  }
}
fruitOrVegetable(['banana']);