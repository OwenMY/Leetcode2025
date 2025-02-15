function maxArea(heights: number[]): number {
    if (!heights.length) return 0;
    
    let result = 0;
    let left = 0;
    let right = heights.length - 1;
    
    while (left < right) {
        const level_height = Math.min(heights[left], heights[right]);
        const land_width = right - left;
        const water_level = level_height * land_width;
        
        result = Math.max(result, water_level);
        if (heights[left] <= heights[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return result;
};