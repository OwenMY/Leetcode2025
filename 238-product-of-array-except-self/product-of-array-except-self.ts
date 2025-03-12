function productExceptSelf(nums: number[]): number[] {
        if (nums.length <= 1) return  [];
    
    const result = [];
    let zeroesCount = 0;
    const oalProduct = nums.reduce((product, num) => {
        if (num === 0) zeroesCount++;
        return product * num
    }, 1);

    if (zeroesCount > 1) return nums.map(num => 0);

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        if (num === 0) {
            const product = nums.reduce((product, num, index) =>  index === i ? product : product * num, 1)
            result.push(product);     
        } else {
            result.push(oalProduct / num);
        }
    }
    
    return result;
};