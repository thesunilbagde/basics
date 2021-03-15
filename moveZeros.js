var moveZeroes = function(nums) {
    
    let count = 0;
    
    for(let i =0 ; i < nums.length ;i++) {
        
        if(nums[i] !== 0 ) {
           nums[count++] = nums[i];
        }
        
    }
    
    for(let j = count; j < nums.length; j++) {
        
        nums[j] = 0;
    }
    return nums;
    
};


console.log("moveZeroes", moveZeroes([0,1,0,3,12]));