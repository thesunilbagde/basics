/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function searchInsert(nums, target) {
  let low = 0;

  let max = nums.length - 1;

  while (low <= max) {
    let mid = Math.floor((low + max) / 2);
    let num = nums[mid];
    if (num == target) {
      return mid;
    } else if (target > num) {
      low = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return low;
}

let result = searchInsert([1, 3, 5, 6], 5);

console.log("result", result);

result = searchInsert([1, 3, 5, 6], 2);
console.log("result", result);

result = searchInsert([1,3,5,6], 7);
console.log("result", result);


result = searchInsert([1,3,5,6], 0);
console.log("result", result);
