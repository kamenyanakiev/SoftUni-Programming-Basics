function oldBooks(input) {
  let counter = 0;
  let i = 2;
  let book = input[0];
  let found = true;
  while (counter <= Number(input[1])) {
    if (input[i] === book) {
      break;
    } else {
      counter++;
      i++;
      if (counter === Number(input[1])) {
        found = false;
        break;
      }
    }
  }
  if (found) {
    console.log(`You checked ${counter} books and found it.`);
  } else {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${counter} books.`);
  }
}
oldBooks(['Troy', 8, 'Stronger', 'Life Style', 'Troy']);