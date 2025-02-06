function subsets(nums: number[]): number[][] {
    if (!nums.length) return [[]];

    const result: number[][] = [[]];
    const path: number[] = [];

    const dfs = (start_index: number): void => {
        if (start_index === nums.length) return;

        for (let i = start_index; i < nums.length; i++) {
            const num = nums[i];
            path.push(num);
            result.push(path.slice());
            
            dfs(i + 1);
            path.pop();
        }
    };

    dfs(0);

    return result;
};
