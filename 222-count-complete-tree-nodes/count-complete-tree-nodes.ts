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
    I - node
    O - number of nodes
    C - dfs or bfs
    E - if no node, return 0


    main(root)
        if no node, return 0

        create result at 1

        result+= main(root.left);
        result+= main(root.right);

        return result



 */

function countNodes(root: TreeNode | null): number {
    if (!root) return 0;
    // We add 1 since the root node is defined
    return 1 + countNodes(root.left) + countNodes(root.right);
};
