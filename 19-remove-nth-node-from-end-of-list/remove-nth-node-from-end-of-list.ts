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


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) return head;
    
    let slowNode = head;
    let deleteNode = head;
    let fastNode = head;

    let slowNodePosition = 1;
    let deleteNodePostion = 1;
    let listLength = 1;

    // Iterate until we reach last node
    while (fastNode.next) {
        fastNode = fastNode.next
        listLength++;

        // If we have traversed enough to have n distance + 1,
        // move delete node to be n distance away from n 
        if (listLength - deleteNodePostion === n) {
            deleteNode = deleteNode.next
            deleteNodePostion++;

            // Move slow node if not at least 1 postion beind deleteNode
            if (deleteNodePostion - slowNodePosition > 1) slowNode = slowNode.next;
        }
    }

    let result = head;

    if (slowNode === deleteNode) {
        result = deleteNode.next;
        deleteNode.next = null;
    } else {
        slowNode.next = deleteNode.next;
        deleteNode.next = null;
    }

    return result;
};