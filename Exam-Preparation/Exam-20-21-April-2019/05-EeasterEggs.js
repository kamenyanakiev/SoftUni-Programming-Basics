function easterEggs(input) {
  let eggs = {
    red: 0,
    orange: 0,
    blue: 0,
    green: 0
  }
 for (let i = 1; i < input.length; i++) {
   if (input[i] === 'red'){
    eggs.red++;
   } else if (input[i] === 'orange'){
    eggs.orange++;
   } else if (input[i] === 'blue'){
    eggs.blue++;
   } else if (input[i] === 'green'){
    eggs.green++;
   }
 }
 let maxEgg = Math.max(eggs.red,eggs.orange,eggs.blue,eggs.green)
 console.log(`Red eggs: ${eggs.red}`);
 console.log(`Orange eggs: ${eggs.orange}`);
 console.log(`Blue eggs: ${eggs.blue}`);
 console.log(`Green eggs: ${eggs.green}`);
  if (maxEgg === eggs.red){
    console.log(`Max eggs: ${maxEgg} -> red`);
  } else if (maxEgg === eggs.orange){
    console.log(`Max eggs: ${maxEgg} -> orange`);
  } else if (maxEgg === eggs.blue){
    console.log(`Max eggs: ${maxEgg} -> blue`);
  } else if (maxEgg === eggs.green){
    console.log(`Max eggs: ${maxEgg} -> green`);
  }
}
easterEggs([7, 'orange', 'blue', 'green', 'green', 'blue', 'red', 'green']);