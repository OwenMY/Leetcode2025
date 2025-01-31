/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 /*
I - root node
O - boolean
C - none
E - if no node, return false

dfs(node, min, max)
if node is null return true

if node val is greater than max or less than min,
  return false

check left dfs(node.left, min, node.val);
check right dfs(node.right, node.val, max);

if left or right is false, return false;

return true;

main(root)
if root is null return false

check left branch dfs(root.left, -Infinity, root.val);
check right branch dfs(root.right, root.val, Infinity);

if either one is false, return false
return true

 */
const dfs = (node: TreeNode | null, min: number, max: number): boolean => {
    if (!node) return true;
    
    if (node.val <= min || node.val >= max) return false;

    const left = dfs(node.left, min, node.val);
    const right = dfs(node.right, node.val, max);

    if (!left || !right) return false;

    return true;
}

function isValidBST(root: TreeNode | null): boolean {
    if (!root) return false;

    const left = dfs(root.left, -Infinity, root.val);
    const right = dfs(root.right, root.val, Infinity);

    if (!left || !right) return false;
    return true;
};