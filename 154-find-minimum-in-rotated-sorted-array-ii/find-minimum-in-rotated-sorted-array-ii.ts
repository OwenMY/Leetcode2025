function findMin(nums: number[], s = 0, e = Infinity): number {
    let start = s;
    let end = Math.min(e, nums.length - 1);
    let lowestNum = nums[end];

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const num = nums[mid];

        if (num === lowestNum) {
            const leftMin = nums[mid - 1] !== undefined ? findMin(nums, start, mid - 1) : Infinity;
            const rightMin = nums[mid + 1] !== undefined ? findMin(nums, mid + 1, end) : Infinity;

            lowestNum = Math.min(lowestNum, leftMin, rightMin);
            break;
        }

        if (num < lowestNum) {
            lowestNum = num;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return lowestNum;
};
