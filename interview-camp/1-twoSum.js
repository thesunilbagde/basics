function twoSum(a, target) {
  if (a == null) return null;
  let start = 0;
  let end = a.length - 1;
  while (start < end) {
    let sum = a[start] + a[end];
    if (sum < target) {
      start++;
    }
    else if (sum > target) {
      end--;
    }
    else {
      return [start, end];
    }
  }
  return null;
}

console.log(twoSum([1, 2, 3, 5, 6, 7],11));
console.log(twoSum([3,2,4],6));
console.log(twoSum([3,3],6));
