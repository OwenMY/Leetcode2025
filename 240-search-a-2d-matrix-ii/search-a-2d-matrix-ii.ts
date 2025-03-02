/*
I - matrix, target num
O - boolean, true if output found
C - none
E - matrix length may not be the same as row length, 
empty matrix


2 binary searches

binary search row(matrix, target, row, isRow)
    create start at 0
    create end if isRow ? row length - 1 : matrix length - 1

    while start <= emd
        get mid by flooring start + end / 2
        get num at mid, // if isRow ? matrix[i][mid] : matrix[mid][col]

        if num is equal to target, return true

        if num is less than target
            set start to mid + 1
        otherwise
            set end to mid - 1

    return false


binary search col(matrix, target, col)
    create start at 0
    create end at matrix length - 1

    while start <= emd
        get mid by flooring start + end / 2
        get num at mid, // matrix[mid][col]

        if num is equal to target, return true

        if num is less than target
            set start to mid + 1
        otherwise
            set end to mid - 1

    return false

*/

const binarySearch = (matrix: number[][], target: number, index: number, isRow: boolean) => {
    let start = 0;
    let end = isRow ? matrix[index].length - 1 : matrix.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const num = isRow ? matrix[index][mid] : matrix[mid][index];

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

    const end = Math.max(matrix.length, matrix[0].length);

    for (let i = 0; i < end; i++) {
        const row = matrix[i];
        const col = matrix[0][i];

        let rowResult = !row ? false : binarySearch(matrix, target, i, true);
        let colResult = !col ? false : binarySearch(matrix, target, i, false);

        if (rowResult || colResult) return true;
    }

    return false;
};