function fishing(input) {
  let quota = Number(input[0]);
  let totalFish = 0;
  let profit = 0;
  let tax = 0;
  input.shift();
  let fishCounter = 0;
  for (let i = 0; i < input.length; i += 2) {
    if (i === quota * 2 - 2) {
      console.log('Lyubo fulfilled the quota!');
    }
    if (input[i] === 'Stop') {
      break;
    }
    let fish = input[i];
    let weight = Number(input[i + 1]);
    let sum = 0;
    for (let j = 0; j < fish.length; j++) {
      sum += fish[j].charCodeAt();
    }
    totalFish++;
    fishCounter++;
    sum /= weight;
    if (fishCounter % 3 === 0) {
      profit += sum;
    } else {
      tax += sum;
    }
  }
  if (profit > tax) {
    console.log(`Lyubo's profit from ${totalFish} fishes is ${(profit - tax).toFixed(2)} leva.`);
  } else {
    console.log(`Lyubo lost ${(tax - profit).toFixed(2)} leva today.`);
  }
}
fishing([3, 'catfish', 70, 'carp', 20, 'tench', 14]);