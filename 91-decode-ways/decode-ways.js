/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (!s.length || s.startsWith("0")) return 0;
    const memo = {};
    return dfs(memo, s, 0);
};

const dfs = (memo, nums, start_index) => {
    if (start_index === nums.length) return 1;
    if (memo[String(start_index)]) return memo[String(start_index)];
    if (nums[start_index] === "0") return 0;

    let ways = 0;

    ways+= dfs(memo, nums, start_index + 1);

    if (start_index + 2 <= nums.length && Number(nums.substring(start_index, start_index + 2)) <= 26) {
        ways+= dfs(memo, nums, start_index + 2);
    }

    memo[String(start_index)] = ways;
    return ways;
};
