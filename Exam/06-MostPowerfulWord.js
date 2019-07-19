function mostPowerfulWord(input) {
  let biggestWord = '';
  let biggestSum = 0;
  for (let i = 0; i < input.length - 1; i++) {
    let word = input[i];
    let sum = 0;
    for (let j = 0; j < word.length; j++) {
      sum += word.charCodeAt(j);
    }
    if  (word[0] === 'a' || word[0] === 'A' || word[0] === 'e' ||  word[0] === 'E' || 
      word[0] === 'i' ||  word[0] === 'I' ||  word[0] === 'o' ||  word[0] === 'O' ||
      word[0] === 'u' ||  word[0] === 'U' ||  word[0] === 'y' ||  word[0] === 'Y') {
        sum *= word.length;
    } else {
        sum /= word.length;
        Math.floor(sum);
    }
    if (sum > biggestSum) {
        biggestSum = sum;
        biggestWord = word;
    }
  }
  console.log(`The most powerful word is ${biggestWord} - ${biggestSum}`);
}
mostPowerfulWord([
  "The",
  "Most",
  "Powerful",
  "Word",
  "Is",
  "Experience",
  "End of words"
]);
