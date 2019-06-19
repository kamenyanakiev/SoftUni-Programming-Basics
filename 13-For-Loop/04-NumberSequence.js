function numberSequence(nums) {
  nums.shift();
  console.log(`Max number: ${Math.max(...nums)}`);
  console.log(`Min number: ${Math.min(...nums)}`);
}
numberSequence([5, 10, 20, 304, 0, 50]);