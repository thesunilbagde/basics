
function binarySearch(nums) {

  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);


    if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1
      console.log("low", low);
      return
    } else {
      return mid;
    }
  }
  return -1
}

let nums = [-1, 0, 3, 5, 9, 12]; target = -1
let result = binarySearch(nums, target);
console.log("result", result);
//Output: 4
