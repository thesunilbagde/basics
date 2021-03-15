function moveZeroesToBeginning(nums) {
  let counter = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] != 0) {
      nums[counter] = nums[i];
      counter--;
    }
  }
  while (counter >= 0) {
    nums[counter] = 0;
    counter--;
  }
  return nums;
}
function swap(a, i, j) {
  let t = a[i];
  a[i] = a[j];
  a[j] = t;
}
let r = moveZeroesToBeginning([4, 2, 0, 1, 0, 3, 0]);
 console.log("r", r);

function moveZeroesToBeginning1(a) {
  let boundary = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] == 0) {
      swap(a, i, boundary);
      boundary += 1;
    }
  }
  return a;
}
  r = moveZeroesToBeginning1([4, 2, 0, 1, 0, 3, 0]);
//console.log("moveZeroesToBeginning1", r);