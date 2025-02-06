/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = [];
    const path = [];
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    nums.sort();

    const dfs = (level, remaining, start_index) => {
        if (level === k) {
            if (remaining === 0) result.push([...path]);
            return;
        }

        for (let i = start_index; i < nums.length; i++) {
            const num = nums[i];
            if (remaining - num < 0) continue;

            path.push(num);
            dfs(level + 1, remaining - num, i + 1);
            path.pop();
        }
    };

    dfs(0, n, 0);

    return !result.length ? [] : result;
};