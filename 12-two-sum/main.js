class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const size = nums.length;
        const result = [] ;
        for(let i = 0 ; i < size; i++) {
            for(let j = i + 1 ; j < size ; j++) {
                if(nums[i] + nums[j] === target) {
                    result[0] = nums[i] ;
                    result [1] = nums[j] ;
                }
            }
        }
        return result ; 
    }
}

let mysol = new Solution() ;

const result = mysol.twoSum([5,5] , 10) ;

console.log(result ) ;

