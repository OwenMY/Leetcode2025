function findTargetSumWays(nums: number[], target: number): number {
    if (!nums.length) return 0;

    let result = 0;
    nums.sort();

    const dfs = (start_index: number, sum: number) => {
        if (start_index === nums.length) {
            if (sum === target) result++; 
            return
        }

        const num = nums[start_index];
        const negNum = 0 - num;

        dfs(start_index + 1, sum + num);
        dfs(start_index + 1, sum + negNum);
    }

    dfs(0, 0);

    return result;
};
