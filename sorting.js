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
// Space complexity is O(1)

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
 // Time complexity is O(n2)
 // Space complexity is O(1)


//  function select(arr) {

//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] =  [arr[idx2], arr[idx1]]
//      }
     
//     for(let i = 0; arr[i]; i++) {
         
//         let min = i;
        
         
//          for(let j = i + 1; j < arr.length; j++) {

//             console.log(arr[min], arr[j]);
            
//              if(arr[min] > arr[j]) {
        
//                 min = j;
               
//              } 
                 
//         console.log('this is lowest: ', arr[min]);
                
//         }

//         if(i !== min) {
        
//           swap(arr, i, min)
          
//         }
        
//         console.log('arr now: ', arr);
        

//        }
// return arr;

//     }
 



// console.log(select([7, 8, 1, -2, 4, 3]));


// Insertion Sort 
// Time complexity is O(n2)
// Space complexity is O(1)

/* 
- Start by picking the second element in the array
- Compare the second element to the one before it and swap if necessary
- Continue to the next element and if it is in the incorrect spot, iterate through the sorted potion (i.e the left side) to place the element in the correct place
- Repeat until the array is sorted
- Return the sorted array
*/



// function insertion(arr) {
//     let curr;
//     for(let i = 1; arr[i]; i++) {
//         curr = arr[i];
//         for(let j = i -1; j >= 0 && arr[j] > curr; j--) {
//             arr[j+1] = arr[j]
//             if(arr[j] > curr) {
//               arr[j] = curr;
//             }
//         }
        
//     }
//     return arr;
// }

// console.log(insertion([4,3, 2, 1]));  
                    //    [4,4,3,1,5];


// Merge Sort 

/* 
- Create an empty array, take a look at the smallest values in each array input
- While there are still values we haven't looked at:
     - if the value in the first array is smaller than the value in the second array, push the value in the first array into our results array, move on to the next value in the first array
     - if the value in the first array is larger than the value in the second array, push the value in the second array into our results, move on to the next value in the second array
     - once we exhaust one array, push in all remaining values from the other array
*/


function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        
        if(arr1[i] < arr2[j]) {
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j]) 
            j++
        }
    }
    
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
         
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
         
    }
    
    return results;
}


console.log(merge([1, 20], [2,14, 99, 100]));
