/ Bubble sort - not very efficient, not commonly used */



/*
- start looping with a variable called 'i' at the end of the array towards the beginning
- start an inner loop with a variable called 'j' from the beginning until i - 1
- if arr[j] is larger than arr[j + 1] swap those two values
- return the sorted arr
 */


 function swap (arr, index1, index2) {
   
    temp = index1
    arr[index1] = arr[index2]
    arr[index2] = temp
 }

 //ES 6 version

 const newSwap = (arr, index1, index2) => {
     [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
 }


//  function bubSort(arr) {
     
//     for(let i = 0; arr[i]; i++) {
//         for(let j = 0; j < arr.length; j++) {
//             console.log('this is j: ', arr[j]);
//             if(arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//               }
//               console.log('this is i ', i); 
//               console.log('the array: ', arr);

//           }
//      }
//      return arr
//  }

 
//this version  is faster as it eliminates going over the already sorted items on the end of the array
// Time complexity is O(n2)
// function bubSort(arr) {
     
//      for(let i = arr.length; i > 0; i--) {
//         for(let j = 0; j < i - 1; j++) {
//             if(arr[j] > arr[j + 1]) {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }

//         }
//      }
//      return arr;
//  }

//  console.log(bubSort([5, 4, 3, 8, 7]));



  / Selection Sort */ 
 //Similar to Bubble Sort but instead of first placing large values into sorted position, it places small values into sorted position.


 function select(arr) {

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] =  [arr[idx2], arr[idx1]]
     }
     
    for(let i = 0; arr[i]; i++) {
         
        let min = i;
         
         for(let j = i + 1; j < arr.length; j++) {

            console.log(arr[min], arr[j]);
            
             if(arr[min] > arr[j]) {
        
                min = j;
               
             } 
                 
        console.log('this is lowest: ', arr[min]);
                
        }
        swap(arr, i, min)
        
        console.log('arr now: ', arr);
        

       }
return arr;

    }
 



console.log(select([7, 8, 1, -2, 4, ]))