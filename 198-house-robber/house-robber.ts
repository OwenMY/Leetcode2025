function rob(nums: number[]): number {
    if (nums.length === 0) return 0;

    const memo: Record<number, number> = {};

    const dfs = (index: number): number => {
        if (index >= nums.length) return 0;

        if (memo[index] !== undefined) return memo[index];

        // Choose to rob current house and skip the next
        const robCurrent = nums[index] + dfs(index + 2);

        // Choose to skip current house
        const skipCurrent = dfs(index + 1);

        // Save the max result in memo
        memo[index] = Math.max(robCurrent, skipCurrent);
        return memo[index];
    }

    return dfs(0);
}
