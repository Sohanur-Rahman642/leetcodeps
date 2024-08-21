class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }

}

class LinkedList {
    constructor() {
        this.head = null
    }

    //addFirst 
    addFirst(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }

    //addLast 
    addLast(data) {
        const newNode = new Node(data)
        //edge case: Whether the list is empty 
        if (!this.head) {
            newNode.next = this.head
            this.head = newNode
            return
        }

        let current = this.head

        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }

    size() {
        let current = this.head
        let count = 0
        while (current) {
            current = current.next
            count++
        }
        return count
    }


    //addAt
    //--check edge cases 
    //-----1) index invalid --> return
    //-----2) index is the first index 
    //Create a newnode 
    //if first index -> do like addFirst() & return
    // if not travers with current & count while count < index - 1
    //when the pos is found do newNode.next = current.next 
    //current.next = newNode
    addAt(data, index) {
        //edge case: invalid index (index < 0 || index > size)
        if (index < 0 || index > this.size()) {
            console.log("Invalid index")
            return
        }

        const newNode = new Node(data)

        //edge case: first index 
        if (index === 0) {
            newNode.next = this.head
            this.head = newNode
            return
        }

        let current = this.head
        let count = 0
        while (count < index - 1) {
            current = current.next
            count++
        }

        newNode.next = current.next
        current.next = newNode
    }


    //removeTop
    //check whether there is a head --> if not return

    removeTop() {
        if (!this.head) {
            return
        }
        let node = this.head
        this.head = this.head.next
        node = null
    }

    //removeAt
    //--check edge cases 
    //-----1) index invalid --> return
    //-----2) index is the first index -> do removeTop & return 
    removeAt(index) {
        //edge case: invalid index (index < 0 || index > size)
        if (index < 0 || index > this.size()) {
            console.log("Invalid index")
            return
        }

        //edge case: first index 
        if (index === 0) {
            this.removeTop()
            return
        }

        let current = this.head
        let count = 0
        let node
        while (count < index - 1) {
            current = current.next
            node = current
            count++
        }
        if (current.next) {
            current.next = current.next.next
        }
        node = null
    }

    //removelast
    removeLast() {
        if (!this.head) {
            return
        }

        let current = this.head
        while (current.next.next) {
            current = current.next
        }
        current.next = null
    }

    //printList
    printList() {
        let current = this.head
        while (current) {
            console.log(current.data, "->")
            current = current.next
        }
    }
}


let ll = new LinkedList()
ll.addFirst(100)
ll.addFirst(200)
ll.addLast(300)
ll.addLast(400)
ll.addAt(500, 2)
ll.addAt(600, 4)
ll.removeTop()
ll.removeLast()
ll.removeAt(2)
console.log("size of linked list -> ", ll.size())
ll.printList()

