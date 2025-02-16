function searchInsert(nums: number[], target: number): number {
    if (!nums.length) return 0;

    let result = 0;
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const num = nums[mid];

        if (num === target) return mid;
        

        if (num < target) {
            start = mid + 1;
            result = mid + 1;
        } else {
            end = mid - 1;
            result = mid;
        }
    }

    return result;
};