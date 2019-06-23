function oneToN(num) {
  for (let i = 1; i <= Number(num[0]); i += 3) {
    console.log(i);
  }
}
oneToN([15]);