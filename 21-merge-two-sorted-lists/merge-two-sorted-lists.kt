/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
class Solution {
    fun mergeTwoLists(list1: ListNode?, list2: ListNode?): ListNode? {
        var result = ListNode(0)
        var current = result 
        var p1 = list1
        var p2 = list2

        while(p1 != null && p2 != null){
            if(p1.`val` <= p2.`val`){
                current.next = p1
                p1 = p1.next
            }else{
                current.next = p2
                p2 = p2.next
            }
            current = current.next!!
        }

        ///add the remaining nodes
        if(p1 != null){
            current.next = p1
        }else{
            current.next = p2
        }

        return result.next //return the head of the merged list
    }
}

/*
Create a dummy node [result] to serve as the starting point of new merged list.

Use a current pointer that will traverse the new merged list, always pointing to the last node added.

Use two pointers, one for list1 and one for list2, to iterate through both input lists simultaneously.

In a loop, compare the values of the nodes at the current pointers. The node with the smaller value is appended to the merged list.

After the loop finishes, one of the lists might still have remaining nodes. Since these lists were already sorted, we can simply append the rest of the non-empty list to our merged list.

Finally, return the next node of the result node, which is the true head of the merged list.
 */