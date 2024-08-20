/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = {}

    for(let num of nums){
        if(map[num]){
            map[num] = map[num] + 1
            return true
        }else{
            map[num] = 1
        }
    }

    return false
};