class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let temp = new Set() ;

        for(let i = 0 ; i  < nums.length; i++) {
            if(!temp.has(nums[i]))  {
                temp.add(nums[i]) ; 
            } else {
                return true ; 
            }
        }

        return false ; 

    }
}




