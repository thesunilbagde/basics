
function subarraySum(nums, k) {
  let map = new Map();
  map.set(0, 1);


  let sum = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      result += map.get(sum - k);
    }
    let value = map.has(sum) ? map.get(sum) + 1 : 0
    map.set(sum, value);
  }
  return result;

};

let r = subarraySum([1, 1, 1], 2);
console.log("r", r);
