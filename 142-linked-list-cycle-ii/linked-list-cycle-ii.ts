/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
    if (!head) return null;
    
    // Storing references to the node itself can differentiate between
    // unique nodes of duplicate values
    const knownNodes: Set<ListNode> = new Set();
    let node = head;
    
    while (node.next) {
        if (knownNodes.has(node)) return node;
        
        knownNodes.add(node);
        node = node.next
    }
    
    return null;    
};
