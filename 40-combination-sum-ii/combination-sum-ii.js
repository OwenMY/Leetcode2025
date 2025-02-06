/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(nums, target) {
    if (!nums.length) return [[]];

    const result = [];
    const path = [];
    const visited = new Set();
    nums.sort();

    const dfs = (remaining, start_index, string_path) => {
        if (remaining === 0) {
            result.push(path.slice());
            return;
        }

        for (let i = start_index; i < nums.length; i++) {
            const num = nums[i];
            const combo = (string_path + " " + num).trimStart();
            if (remaining - num < 0 || visited.has(combo)) continue;
            path.push(num);

            dfs(remaining - num, i + 1, combo);

            path.pop();
            visited.add(combo);
        }
    };

    dfs(target, 0, "");

    return result;
};