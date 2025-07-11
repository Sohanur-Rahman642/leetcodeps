class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        val map = mutableMapOf<Int, Int>()

        nums.forEachIndexed{ index, current ->
            val compliment = target - current
            if(map.containsKey(compliment)){
                return intArrayOf(map[compliment]!!, index)
            }
            map[current] = index
        }

        return intArrayOf()
    }
}

///There are three approach of it:
///One-> general brute force(considering each pair with two loops) -> O(N^2)
///Two-> two pointer after making the input array sorted -> O(NLOGN)
///Three-> Hashmap <Value, Index> -> O(N)