function metricConverter(input) {
  let number = Number(input[0]);
  let from = input[1];
  let to = input[2];
  if (from === 'm' && to === 'mm'){
    console.log((number * 1000).toFixed(3));
  } else if (from === 'm' && to === 'cm'){
    console.log((number * 100).toFixed(3));
  } else if (from === 'cm' && to === 'm'){
    console.log((number / 100).toFixed(3));
  } else if (from === 'cm' && to === 'mm'){
    console.log((number * 10).toFixed(3));
  } else if (from === 'mm' && to === 'm'){
    console.log((number / 1000).toFixed(3));
  } else {
    console.log((number / 10).toFixed(3));
  }
}
metricConverter([1201.34, 'mm', 'cm']);