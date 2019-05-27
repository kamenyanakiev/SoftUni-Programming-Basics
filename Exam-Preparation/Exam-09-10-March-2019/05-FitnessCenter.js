function fitnessCenter(input) {
  let fitness = {
    back: 0,
    chest: 0,
    legs: 0,
    abs: 0,
    shake: 0,
    bar: 0,
    workout: 0,
    buy: 0
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'Back') {
      fitness.back++;
      fitness.workout++;
    } else if (input[i] === 'Chest') {
      fitness.chest++;
      fitness.workout++;
    } else if (input[i] === 'Legs') {
      fitness.legs++;
      fitness.workout++;
    } else if (input[i] === 'Abs') {
      fitness.abs++;
      fitness.workout++;
    } else if (input[i] === 'Protein shake') {
      fitness.shake++;
      fitness.buy++;
    } else if (input[i] === 'Protein bar') {
      fitness.bar++;
      fitness.buy++;
    }
  }
  console.log(`${fitness.back} - back`);
  console.log(`${fitness.chest} - chest`);
  console.log(`${fitness.legs} - legs`);
  console.log(`${fitness.abs} - abs`);
  console.log(`${fitness.shake} - protein shake`);
  console.log(`${fitness.bar} - protein bar`);
  console.log(`${((fitness.workout * 100)/Number(input[0])).toFixed(2)}% - work out`);
  console.log(`${((fitness.buy * 100)/Number(input[0])).toFixed(2)}% - protein`);
}
fitnessCenter([10, 'Back', 'Chest', 'Legs', 'Abs', 'Protein shake', 'Protein bar', 'Protein shake', 'Protein bar', 'Legs', 'Abs', ])