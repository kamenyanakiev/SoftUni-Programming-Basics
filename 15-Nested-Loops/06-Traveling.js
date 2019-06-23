function traveling(input) {
  for (let i = 0; i < input.length; i++) {
    if (isNaN(Number(input[i]))) {
      if (input[i] === 'End') {
        break;
      } else {
        console.log(`Going to ${input[i]}!`);
      }
    }
  }
}
traveling(['Greece', '1000', '200', '200', '300', '100', '150', '240', 'Spain', '1200', '300', '500', '193', '423', 'End']);