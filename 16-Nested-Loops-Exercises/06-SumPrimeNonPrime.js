function sumPrimeNonPrime(input) {
  let primeSum = 0;
  let nonPrimeSum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "stop") {
      break;
    }
    let num = Number(input[i]);

    if (num < 0) {
      console.log("Number is negative.");
    } else {
      let isPrime = true;
      if (num < 2) isPrime = false;
      else {
        for (let j = 2; j <= Math.sqrt(num); j++) {
          if (num % j === 0) isPrime = false;
        }
      }
      if (isPrime) {
        primeSum += num;
      } else {
        nonPrimeSum += num;
      }
    }
  }
  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
