const binarySearch = (nums: number[], target: number): boolean => {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const num = nums[mid];

        if (num === target) return true;

        if (num < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }

    }

    return false;
}

function searchMatrix(matrix: number[][], target: number): boolean {
    if (!matrix.length) return false;

    for (const row of matrix) {
        if (target >= row[0] && target <= row.at(-1)) {
            return binarySearch(row, target);
        }
    }

    return false;
};