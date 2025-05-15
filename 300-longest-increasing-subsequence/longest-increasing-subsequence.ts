function lengthOfLIS(nums: number[]): number {
    const memo: {[key: number]: number} = {};

    const dfs = (index: number): number => {
        if (memo[index] !== undefined) return memo[index];

        let maxLength = 1; // At least the current element

        for (let next = index + 1; next < nums.length; next++) {
            if (nums[next] > nums[index]) {
                maxLength = Math.max(maxLength, 1 + dfs(next));
            }
        }

        memo[index] = maxLength;
        return maxLength;
    };

    let longest = 0;
    for (let i = 0; i < nums.length; i++) {
        longest = Math.max(longest, dfs(i));
    }

    return longest;
}
