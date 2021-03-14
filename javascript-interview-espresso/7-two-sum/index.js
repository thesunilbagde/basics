/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    let map = {};
    for (var i = 0; i < nums.length; i++) {
        let num = nums[i];
        let want = target - num;
        if (want in map) {
            let leftIndex = map[want];
            return [leftIndex, i];
        } else {
            map[num] = i;
        }
    }
}

let result = twoSum([2, 7, 11, 15], 9);
console.log("result", result);
