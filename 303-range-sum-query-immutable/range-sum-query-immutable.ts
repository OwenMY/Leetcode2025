class NumArray {
    private prefixSums: number[] = [];

    constructor(nums: number[]) {
        if (!nums.length) return null;

        let sum = 0;

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            sum+= num;

            this.prefixSums.push(sum);
        }

        return null;
    }

    sumRange(left: number, right: number): number {
        const leftNum = left === 0 ? 0 : this.prefixSums[left - 1];
        const rightNum = this.prefixSums[right];

        return rightNum - leftNum;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */