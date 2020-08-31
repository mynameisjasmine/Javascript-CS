 // [Recursion]

 / Some examples of recursion are: */
 /* 
 - JSON.parse / JSON.stringify
 - document.getElementByID and DOM traversal
 - Object traversal
 */


//2 essential parts of a recursive function

/* 
- Base Case
- Different input
*/

 function countDown (num) {
     if (num <= 0) {
         console.log("all done");
         return;  // base case
     }
     console.log(num);
     num --; // decrement
     countDown(num)
 }

 countDown(5)


 //iterative implemention

 function countDownIter(num) {
     for(i = num; i > 0; i--) {
         console.log(i);
         
     }
    console.log("this is finished!!");
    
 }

 countDownIter(6)


 // Another recursive example
 function sumRange(num) {
     if(num === 1) return 1; // base case
     return num + sumRange(num - 1); 
 }

 
 
 
 // Recursive factorial function
 function factors(num) {
   if(num === 1) return 1;
//    console.log(num);
   return num * factors(num-1)
    
 }
 console.log(factors(4));

 

// iterative implementation
 //  4! = 4*3*2*1

 function factorialIter(num) {
     total = 1;
     for (i = num; i > 0; i--) {
         console.log('total:',total);
         total *= i

     }
     return total
 }

 factorialIter(4)