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

 factorialIter(4); 

/Helper Method Recursion */

// common used when one needs to compile somehting such as an array or a list of data
// has an 'outer' function (that is NOT recursive), which calls an 'inner' function (that IS recursive)


function collectOdds(arr) {
    let result = [];
    
    function helper(input) {
       if(input.length ===0) return; //base case
        if(input[0] % 2 !== 0) {
            result.push(input[0])
        }
       helper(input.slice(1))
       console.log('input:',input) 
    }
    helper(arr)
    
    return result;
}

collectOdds([1,2,3,4,5])



//collect odds function using pure recursion, this example will use the .concat method