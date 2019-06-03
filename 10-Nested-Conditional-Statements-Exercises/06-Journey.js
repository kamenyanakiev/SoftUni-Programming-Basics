function journey(input) {
  let funds = Number(input[0]);
  let season = input[1];
  let placeForTrip = 0;
  let fundsForTrip = 0;
  let placeForSleep = 0;
  if (funds <= 100) {
    placeForTrip = 'Bulgaria';
    if (season === 'summer') {
      fundsForTrip = (funds * 0.30).toFixed(2);
      placeForSleep = 'Camp'
    } else if (season === 'winter') {
      fundsForTrip = (funds * 0.70).toFixed(2);
      placeForSleep = 'Hotel'
    }
  } else if (funds > 100 && funds <= 1000) {
    placeForTrip = 'Balkans';
    if (season === 'summer') {
      fundsForTrip = (funds * 0.40).toFixed(2);
      placeForSleep = 'Camp'
    } else if (season === 'winter') {
      fundsForTrip = (funds * 0.80).toFixed(2);
      placeForSleep = 'Hotel'
    }
  } else if (funds > 1000 ){
    placeForTrip = 'Europe';
    fundsForTrip = (funds * 0.90).toFixed(2);
    placeForSleep = 'Hotel';
  }
  console.log(`Somewhere in ${placeForTrip}`);
  console.log(`${placeForSleep} - ${fundsForTrip}`);
}
journey([50, 'summer']);