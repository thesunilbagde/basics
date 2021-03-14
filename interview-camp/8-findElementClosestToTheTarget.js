
function record(nums, mid, result, target) {
  if (result == -1 || Math.abs(nums[mid] - target) < Math.abs(nums[result] - target))
    { return mid }

  return result;
}
function closetElement(nums, target) {

  if (nums == null) {
    return -1;
  }

  let start = 0;
  let end = nums.length - 1;

  let result = -1;

  while (start <= end) {

    let mid = start +   (end - start) / 2  ;

    result = record(nums, mid, result, target);

    if (nums[mid] > target) {
      end = mid - 1;
    }
    else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return result;
}

let result = closetElement([1,2,4,5,7,8,9], 6);
console.log("result", result);
