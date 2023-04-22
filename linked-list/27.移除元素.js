// 暴力解法
var removeElement = function(nums, val) {
    let i = 0;
    let count = 0;
    for (i = 0; i < nums.length - count; i++) {
        if (nums[i] === val) {
            for (let j = i + 1; j < nums.length; j++) {
                nums[j - 1] = nums[j]
            }
            count++
            i--
        }
    }
    return nums.length - count;
}

// 双指针解法
var removeElement = function(nums, val) {
    let i = 0;
    let len = nums.length;
    // 找到第一个要删除的数据
    for (let j = 0; j < len; j++) {
        if (nums[j] !== val) {
            nums[i++] = nums[j];
        }
    }
    return i;
};

// 双指针优化解法
var removeElement = function(nums, val) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        if (nums[left] === val) {
            let tmp = nums[left];
            nums[left] = nums[right];
            nums[right] = tmp;
            right--;
        } else {
            left++;
        }
    }
    return left;
}