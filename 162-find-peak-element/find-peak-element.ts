function findPeakElement(nums: number[]): number {
    if (nums.length === 1) return 0;

    let result = 0;
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const num = nums[mid];
        const neighbor = nums[mid + 1] !== undefined ? nums[mid + 1] : -Infinity;

        if (num > neighbor) {
            result = mid;
            end = mid - 1;
        } else {
            result = mid + 1;
            start = mid + 1;
        }
    }
    return result;
};