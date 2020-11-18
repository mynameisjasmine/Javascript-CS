/ Data Structures */
/* Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data*/

// What is a class? A class is a blueprint for creating objects with pre-defined properties and methods

 
// Creating a node class. A node contains a pice of data (value) and a reference to the next node

class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("you")

// console.log(first);

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // creating a push method
    /* Psuedocode
    - This method should accept a value
    - Create a new node using the value passed to the function
    - If there is no head property on the list, set the head and the tail to be the newly created node
    - Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
    - Increment the length by one
    */
    push(val) {
      
    }
}