const findTargetStartIndex = (nums: number[], target: number): number => {
    let start = 0;
    let end = nums.length - 1;
    let result = -1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const num = nums[mid];

        if (num === target) result = mid;

        if (num >= target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return result;
};

const findTargetEndIndex = (nums: number[], target: number): number => {
    let start = 0;
    let end = nums.length - 1;
    let result = -1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const num = nums[mid];

        if (num === target) result = mid;

        if (num <= target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return result;
};

function searchRange(nums: number[], target: number): number[] {
    if (!nums.length) return [-1, -1];

    const result = [
        findTargetStartIndex(nums, target),
        findTargetEndIndex(nums, target)
    ];

    return result;
};