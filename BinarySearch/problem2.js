// Return a list of the target indices of nums after sorting nums in non-decreasing order. 
//If there are no target indices, return an empty list. 
//The returned list must be sorted in increasing order.

// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.

var binarySearch = function(lists, sortedList, low, high, target) {
    console.log(low, high)
    if(low>high) {
        return;
    }
    const mid = Math.floor((low+high)/2)
    if (sortedList[mid]===target) {
        lists.push(mid)
    }
    binarySearch(lists, sortedList, low, mid-1, target)
    binarySearch(lists, sortedList, mid+1, high, target)
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort((a,b) => a-b);
    const result = []
    binarySearch(result, nums, 0, (nums.length-1), target)
    console.log(result);
};



var nums = [1,2,5,2,3]
var target = 2

targetIndices(nums, target)