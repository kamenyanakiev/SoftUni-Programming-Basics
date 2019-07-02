function stadiumIncome(input) {
  let sectors = Number(input[0]);
  let capacity = Number(input[1]);
  let singlePrice = Number(input[2]);
  let totalIncome = capacity * singlePrice;
  let incomePerSector = totalIncome / sectors;
  let charityMoney = (totalIncome - (incomePerSector * 0.75)) / 8;
  console.log(`Total income - ${totalIncome.toFixed(2)} BGN`);
  console.log(`Money for charity - ${charityMoney.toFixed(2)} BGN`);
}
stadiumIncome([4, 5000, 5]);