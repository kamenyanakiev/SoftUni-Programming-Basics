function sumNumbers(nums) {
  let sum = 0;
  for (let i = 1; i < nums.length; i++) {
    sum += Number(nums[i]);
  }
  console.log(sum);
}
sumNumbers([2, 10, 20]);