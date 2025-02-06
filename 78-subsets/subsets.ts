/*
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

constraints: all results must be unqiue
edgecase: if nums is empty, return empty array of array

backtracking

main(nums)
if nums is empty, return empty array of array

create result array with 1 empty array inside
create path array

dfs(start_index) {
    if start_index is equal to nums length
        return
    
    iterate nums
        push num into path
        push copy of path into result

        dfs(start_index + 1)

        pop path
}

dfs(0)

return result
*/


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
