
function maximumSumSubArray(nums) {

  if (nums == null || nums.length == 0) {
    return nums;
  }

  let maxSum = nums[0];

  let maxEndingHere = nums[0];

  for (let i = 1; i < nums.length; i++) {
                             1+ 2  +2
    maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i])
    console.log("maxEndingHere", maxEndingHere);

    maxSum = Math.max(maxSum, maxEndingHere);
    console.log("maxSum", maxSum);

  }
  return maxSum;
}

let result = maximumSumSubArray([1, 2, -1, 2, -3, 2, -5])
console.log("result", result);
