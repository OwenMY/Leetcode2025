function mySqrt(x: number): number {
    if (!x || x === 1) return x;

    let result = -Infinity;
    let start = 1;
    let end = x;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const product = mid * mid;

        if (product === x) return mid;

        if (product < x) {
            result = Math.max(result, mid);
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return result;
};