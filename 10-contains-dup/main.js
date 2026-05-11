class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let temp_set = new Set() ;

        for(let i = 0 ; i  < nums.length; i++) {
            if(!temp_set.has(nums[i]))  {
                temp_set.add(nums[i]) ; 
            } else {
                return true ; 
            }
        }

        return false ; 

    }
}




