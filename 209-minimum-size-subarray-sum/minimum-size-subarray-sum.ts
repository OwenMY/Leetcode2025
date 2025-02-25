function minSubArrayLen(target: number, nums: number[]): number {
    if (!nums.length) return 0;

    let result = 0;
    let count = 0;
    let sum = 0;

    for (let i = 0, j = 0; j < nums.length; j++) {
        const num = nums[j];

        if (num >= target) return 1;

        sum+= num;
        count++;

        while (sum >= target) {
            result = !result ? count : Math.min(result, count);
            
            sum-= nums[i];
            count--;
            i++;
        }
    }

    return result;
};
