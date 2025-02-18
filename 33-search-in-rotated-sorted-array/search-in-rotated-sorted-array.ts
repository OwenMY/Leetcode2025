const findPivotIndex = (nums: number[]): number => {
    let start = 0;
    let end = nums.length - 1;
    let lowestNum = nums[end];
    let pivot = 0;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const num = nums[mid];

        if (num <= lowestNum) {
            lowestNum = num;
            pivot = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return pivot;
};

const binarySearch = (nums: number[], target: number, s: number, e: number): number => {
    let start = s;
    let end = e;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const num = nums[mid];

        if (num === target) return mid;

        if (num < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
};

function search(nums: number[], target: number): number {
    if (!nums.length) return -1;

    let start = 0;
    let end = nums.length - 1;
    const isRotated = nums[start] > nums[end];

    if (isRotated) {
        const pivotIndex = findPivotIndex(nums);
        const num = nums[pivotIndex];

        if (num === target) return pivotIndex;

        if (target > nums[end]) {
            end = pivotIndex;
        } else {
            start = pivotIndex;
        }
    }

    return binarySearch(nums, target, start, end);
};