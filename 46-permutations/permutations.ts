function permute(nums: number[]): number[][] {
    if (!nums.length) return [];
    if (nums.length === 1) return [nums];

    const result = [];
    const collectedNums = [];

    const dfs = (remaining: number[]) => {
        if (collectedNums.length === nums.length) {
            result.push(collectedNums.slice(0));
            return;
        }

        for (const num of remaining) {
            collectedNums.push(num);
            dfs(remaining.filter((element) => num !== element));
            collectedNums.pop();
        }
    };
    
    dfs(nums.slice(0));
    
    return result;
};
