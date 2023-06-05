var sortedSquares = function(nums) {
    const len = nums.length;
    let i = 0; 
    let j = len - 1;
    const result = [];
    while (i <= j) {
        const valI = nums[i] * nums[i];
        const valJ = nums[j] * nums[j];
        if (valI < valJ) {
            result.unshift(valJ);
            j--;
        } else {
            result.unshift(valI);
            i++;
        }
    }
    return result;
}