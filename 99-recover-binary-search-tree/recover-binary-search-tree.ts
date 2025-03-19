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
function recoverTree(root: TreeNode | null): void {
    if (!root) return;

    // Bst's if you traverse them inOrder should read each value in incrementing order
    // So we push nodes into this stack, check if the stacks in order swap accordingly
    const nodes = []; 

    const dfs = (node: TreeNode | null) => {
        if (!node) return;

        dfs(node.left);

        nodes.push(node);

        let currNodeIndex = nodes.length - 1;
        let prevNodeIndex = nodes.length - 2;

        while (
            prevNodeIndex >= 0 && 
            currNodeIndex >= 0 && 
            nodes[currNodeIndex].val < nodes[prevNodeIndex].val
        ) {
            [nodes[currNodeIndex].val, nodes[prevNodeIndex].val] = [nodes[prevNodeIndex].val, nodes[currNodeIndex].val];
            // We swap + decrement since bst structure should always be in incrementing order from left to right
            currNodeIndex--;
            prevNodeIndex--;
        }

        dfs(node.right);
    };

    dfs(root);
};
