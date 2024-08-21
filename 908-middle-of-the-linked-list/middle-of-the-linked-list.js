/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let current = head
    let count = 0
    while(current){
        current = current.next
        count++
    }

    let i = 0
    while(i < Math. ceil(count/2) - 1 && head.next){
        head = head.next
        i++
    }

    if(count % 2 == 0){
        return head.next
    }else{
        return head
    }
    
};