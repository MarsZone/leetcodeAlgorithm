// Descr
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。


示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/

//Try by myself
var twoSum = function(nums, target) {
    if(nums==null ||nums.length==0 || target == null){
        return;
    }
    var curpos = 0;
    while(curpos<=nums.length){
        if(curpos == nums.length){
            return;
        }
        for(var i=(curpos+1);i<nums.length;i++){
            if(nums[curpos]+nums[i] == target){
                return [curpos,i]
            }
        }
        curpos++
    }
};


//Answer
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsObj = {}
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i]
        let match = target - current
        if (match in numsObj) {
            return [i, numsObj[match]]
        }
        numsObj[current] = i
    }
};
