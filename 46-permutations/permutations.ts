// main(nums)
// if nums is empty, return empty array
// if nums has 1 num in it, return array of array with that num

// create result array
// create collectNums array




// invoke dfs(nums.slice())

//return result

function permute(nums: number[]): number[][] {
    if (!nums.length) return [];
    if (nums.length === 1) return [nums];

    const result = [];
    const collectedNums = [];

    // dfs(remaining: number[]) {}
    const dfs = (remaining: number[]) => {
        // if collectedNums array is same length as nums array
        if (collectedNums.length === nums.length) {
            // push copy of collectedNums into result
            result.push(collectedNums.slice(0));
            return;
        }

        // iterate remainingNums
        for (const num of remaining) {
            // push current number in nums into collectNums array
            collectedNums.push(num);
            // dfs(remainingNums.filter(currentNumber))
            dfs(remaining.filter((element) => num !== element));
            // pop the current num from collectNums
            collectedNums.pop();
        }
    };
    
    dfs(nums.slice(0));
    
    return result;
};