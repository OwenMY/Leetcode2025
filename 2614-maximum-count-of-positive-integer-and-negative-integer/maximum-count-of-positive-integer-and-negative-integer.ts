const countPosNums = (nums: number[]): number => {
    let start = 0;
    let end = nums.length - 1;
    let firstPosIndex = nums.length;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const num = nums[mid];

        if (num > 0) {
            firstPosIndex = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return nums.length - firstPosIndex;
};

const countNegNums = (nums: number[]): number => {
    let start = 0;
    let end = nums.length - 1;
    let firstNegIndex = 0;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const num = nums[mid];

        if (num < 0) {
            firstNegIndex = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    if (!firstNegIndex && nums[firstNegIndex] < 0 || firstNegIndex) firstNegIndex++;

    return firstNegIndex;
};

function maximumCount(nums: number[]): number {
    if (!nums.length) return 0;

    const posCount = countPosNums(nums);
    const negCount = countNegNums(nums);

    return Math.max(posCount, negCount);
};
