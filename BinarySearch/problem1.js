//Count Pairs Whose Sum is Less than Target
// Input: nums = [-1,1,2,3,1], target = 2
// Output: 3

// Brute-force
var countPairs = function (nums, target) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] < target) {
                count = count + 1;
            }
        }
    }
    return count;
};

var nums = [-1,1,2,3,1]
var target = 2

// var result = countPairs(nums, target)
// console.log(result);

// log(n) algorithm
var countPairsOptimised = (nums, target) => {
    nums.sort((a,b) => a-b)
    console.log(nums)
    let i=0;
    let j=nums.length-1;
    console.log(j)
    let count = 0;
    while(i<j) {
        if (nums[i]+nums[j] < target) {
            count += j-i;
            i++; 
        } else {
            j=j-1;
        }
    }
    return count;
}

console.log(countPairsOptimised(nums, target))