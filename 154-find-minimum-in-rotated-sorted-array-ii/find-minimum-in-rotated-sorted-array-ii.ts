function findMin(nums: number[], s = 0, e = Infinity): number {
    let start = s;
    let end = Math.min(e, nums.length - 1);
    let lowestNum = nums[end];

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const num = nums[mid];

        if (num === lowestNum) {
            const leftMin = findMin(nums, start, mid - 1);
            const rightMin = findMin(nums, mid + 1, end);

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

    if (lowestNum === undefined) return 10000000; // Since infinity does not count as number type
    return lowestNum;
};
