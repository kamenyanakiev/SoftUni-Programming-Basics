function coding(string) {
  let array = string[0].split("").map(Number);
  let result = "";
  for (let i = string[0].length - 1; i >= 0; i--) {
    result = "";
    if (array[i] === 0) {
      result = "ZERO";
    }
    for (let j = array[i]; j > 0; j--) {
      result += `${String.fromCharCode(array[i] + 33)}`;
    }
    console.log(result);
  }
}
coding(["2049"]);
