/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let current = head 
    let string1 = ""
    let string2 = ""

    while(current){
        string1=`${string1}${current.val}`
        string2=`${current.val}${string2}`
        current = current.next
    }

    return string1 === string2
};