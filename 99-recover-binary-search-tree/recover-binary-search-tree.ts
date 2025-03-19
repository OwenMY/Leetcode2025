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

/**
 Do not return anything, modify root in-place instead.
 */
function recoverTree(root: TreeNode | null, stack: TreeNode[] = []): void {
    if (!root) return;

    recoverTree(root.left, stack);

    // Bst's if you traverse them inOrder should read each value in incrementing order
    // So we push nodes into this stack, check if the stacks in order swap accordingly
    stack.push(root);

    let currNodeIndex = stack.length - 1;
    let prevNodeIndex = stack.length - 2;

    while (
        prevNodeIndex >= 0 && 
        currNodeIndex >= 0 && 
        stack[currNodeIndex].val < stack[prevNodeIndex].val
    ) {
        [stack[currNodeIndex].val, stack[prevNodeIndex].val] = [stack[prevNodeIndex].val, stack[currNodeIndex].val];
        // We swap + decrement since bst structure should always be in incrementing order from left to right
        currNodeIndex--;
        prevNodeIndex--;
    }

    recoverTree(root.right, stack);
};
