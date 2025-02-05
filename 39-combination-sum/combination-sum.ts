function combinationSum(candidates: number[], target: number): number[][] {
    if (!candidates.length) return [[]];

    const result: number[][] = [];
    const path: number[] = [];
    const resultTracker = new Set();

    const dfs = (sum): void => {
        if (sum === target) {
            const pathCopy = path.slice().sort();
            const combination = pathCopy.join(" ");
            if (!resultTracker.has(combination)) {
                resultTracker.add(combination);
                result.push(path.slice());
            }

            return
        }

        for (const num of candidates) {
            if (sum + num > target) continue;
            path.push(num);

            dfs(sum + num);

            path.pop();
        }
    };

    dfs(0);

    return result;
};