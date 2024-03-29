/ Data Structures */
/* Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data*/

// What is a class? A class is a blueprint for creating objects with pre-defined properties and methods

 
// Creating a node class. A node contains a piece of data (value) and a reference to the next node

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
      let newNode = new Node(val)
      if(!this.head) {
          this.head = newNode;
          this.tail = this.head;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length ++;
      return this;
    }

    // creating a pop method
    /* Psuedocode
    - This method does not accept an argument
    - If there are no nodes in the list return undefined (if there is head or if length is 0 etc)
    - Loop through the entire list until you reach the tail 
    - Set the property of the 2nd to the last node to be null
    - Set the tail to be the 2nd to the last node
    - Decrement the length by one
    - Return the value of the node removed
    */
    // pop() {
    //  let current = this.head
    //  let pre = current.next
    //  let poppedNode = this.tail
    //  if(this.length === 0) return undefined;
    //  while(current) {
    //      current = current.next
    //      pre = pre.next

    //  }
    // //  return poppedNode.value
    // console.log(poppedNode.value);
    // }

    pop() {
    if(this.length === 0) return undefined;
    let p1 = this.head
    let p2 = p1
    let end = this.tail
    while(p1.next) {
     p2 = p1
     p1 = p1.next
    }
    
    this.tail = p2
    p2.next = null
    this.length --
     
    //make sure to change head and tail to null if we pop off the last remaining or sole node
    if(this.length === 0) {
        this.head = null;
        this.tail = null;
    }


    return console.log('this is p1 value:',p1.value);
  }

  // creating a shift method (opposite to pop, this removes a node from the beginning of a list)
    /* Psuedocode
    - If there are no nodes return undefined
    - Store the current head property in a variable
    - Set the head property to be the current head's next property 
    - Decrement the length by one
    - Return the value of the node removed
    */

    shift() {
     if(!this.head) return undefined;
     let currHead = this.head;
     this.head = currHead.next;
     this.length--
     return currHead;
    }

    // creating an unshift method (adds a node to the beginning of a list)
    /* Psuedocode
     - This method should accept a value
    - Create a new node using the value passed to the function
    - If there is no head property on the list, set the head and the tail to be the newly created node
    - Set the new node's next property to be the current head
    - Set the new node to be the new head
    - Increment the length by one
    - Return the value of the list
    */

    unshift(val) {
      let newNode = new Node(val)
      if(!this.head) {
        this.head =  newNode; 
        this.tail = this.head;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
  }

  // creating a get method
    /* Psuedocode
    - This method accepts an index as an argument
    - If the index is less than zero or greater than or equal to the length of the list, return null
    - Loop through the entire list until you reach the index then return the node at that specific index
    */
    
    get(index) {
      let count = 0;
      let curr = this.head;
      if(index < 0 || index >= this.length) {
        return null;
      } else {
        while(count < index) {
          curr = curr.next
          count++
         }
      }
      return curr;
    //  return console.log(curr.value);
    }

    // creating a set method
    /* Psuedocode
    - This method accepts an index and a value as arguments
    - Can use our previous get method
    - If the node is not found return false
    - If the node is found, update the value of that node to be the value of the argument passed to the function
     and return node value
    */
    
   set(index,val) {
     //this code does not work when using let instead of var
     var foundNode = this.get(index);
     
     if(!this.head || !foundNode) {
       return false;
     } else {
       foundNode.value = val
      
     }
     return foundNode.value

   }

   // insert - adding a node to the linked list at a specific position

   // creating an insert method
    /* Psuedocode
    - If the index is less than zero or greater than the length, return false
    - If the index is the same as the length, push a new node to the end of the list
    - If the index is 0, unshift a new node to the start of the list
    - Otherwise, using the get method, access the node at the index -1
    - Set the next property on that node to be the new node
    - Set the next property on the new node to be the previous node
    - Increment the length of the linked list
    */
   insert(index, val) {
     //use existing get method to find a specific index
     if(index < 0 || index > this.length) {
       return false
     }
     else if(index === this.length) {
        return !!this.push(val)
     }
     else if(index === 0) {
       return !!this.unshift(val)
     } 
       let insertNode = new Node(val)
       let prevNode = this.get(index-1)
       insertNode.next = prevNode.next
       prevNode.next = insertNode
       this.length++;
       return true
       
       
      
      //  return this;

    }
  //remove an item from a specific index

  
    remove(index) {
      this.get(index);
      if (this.length === 1) {
       this.value = null;
      //making sure that the sole remaining node is both the head and the tail
      } else if(this.length === 2 && this.get(index-1) ) {
        this.get(index-1) = this.head
        this.tail = this.get(index-1)
        //this.blah.next = null;
      }
      this.length--

    }
    print() {
    let curr = this.head
    if(!this.head) return undefined;
    
    while(curr) {
        console.log(curr.value)
        curr = curr.next
    }
    
  }
}
let list = new SinglyLinkedList()
list.push('Good')
list.push('Morning')
list.push('Nice')
list.push('Day')
list.push('Today')
list.push('yipee')

// list.print()
// list.pop()
// list.print()
// console.log(list);
// list.unshift('Sup!')
// list.get(0)

console.log(list.insert(0, 'Dude!'));
console.log(list.insert(7, 'Checking'));
console.log(list.insert(8, 'Testing'));
console.log(list.insert(9, 'This works!!'));
console.log(list.insert(1, 'QC'));
console.log(list.insert(3, 'Misty'));
console.log(list.insert(13, 'break it'));






list.print();
// console.log(list.set(0, 'yolo'));


