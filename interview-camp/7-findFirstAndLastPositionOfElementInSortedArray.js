
function findStarting(nums, target) {
  let index = -1;
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] >= target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    if (nums[mid] == target) {
      index = mid;
    }
  }
  return index;
}
function findEnding(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while(start <= end) {
    let mid = Math.floor(start + (end  - start) / 2);

    if(nums[mid] <= target) {
       start = mid + 1;
    } else {
      end = mid - 1
    }

    if(nums[mid] == target ) {
      index = mid;
    }
  }
  return index;
}
function searchRange(nums, target) {
  let result = [];

  result[0] = findStarting(nums, target);

  result[1] = findEnding(nums, target);

  return result;
}
let nums = [5, 7, 7, 8, 8,8, 10]; let target = 8
let result = searchRange(nums, target);
console.log("result", result);
