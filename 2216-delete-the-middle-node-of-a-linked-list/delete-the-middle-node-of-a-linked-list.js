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
var deleteMiddle = function(head) {
    if (!head || !head.next) return null;
    
    let current = head
    let count = 0
    
    while(current){
        current = current.next
        count++
    }

    if(count <= 2 && head.next){
        head.next = null
        return head
    }else{
        let i = 0
        let node = head
        let cache
        while(i < Math.floor(count/2) - 1){
            node = node.next
            cache = node
            i++
        }
        if(node.next){
            node.next = node.next.next
        }

        cache = null
        return head
    }
};