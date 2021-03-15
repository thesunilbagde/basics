/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function towSum(nums, target) {
   if(nums == null || nums.length ==0) {
     return null;
   }
   let start = 0;
   let end = nums.length - 1;
   let sum;
    while(start < end) {  
    sum  = nums[start] + nums[end]
     
      if(sum < target) {
        start++;
      } 
      else if(sum > target) {
        end--;
      } 
      else { 
        return [start,end];
      }
    } ;
    return [];
};


//Input: 
//let nums = [2,7,11,15]; let  target = 9

/*let result = towSum(nums, target);
console.log("result", result);*/

  result = towSum([3,2,4,1], 6);
console.log("result", result);
 