let nums = [2, 7, 11, 15];
let target = 9;
//let nums = [3,2,4], target = 6;
//let  nums = [3,3], target = 6;

function targetSum(nums, target) {
    target;
    let map = {};
    // body...
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let want = target - num;
        if (want in map) {
            return [map[want], i];
        } else {
            map[num] = i;
        }
    }
}
console.log(targetSum(nums, target));
