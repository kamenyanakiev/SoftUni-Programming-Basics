function personalTitles(input) {
  if (Number(input[0]) >= 16){
    if (input[1] === 'm') {
      console.log('Mr.');
    } else {
      console.log('Ms.');
    }
  } else {
    if (input[1] === 'm') {
      console.log('Master');
    } else {
      console.log('Miss');
    }
  }
}
personalTitles([17, 'm']);