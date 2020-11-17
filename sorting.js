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

//This function works when merging 2 sorted array
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


//This function is for merging 2 unsorted arrays

/* 
- Break up the arrays into halves until you have arrays that are empty or contain 1 element
- Once you have the smaller arrays, merge them back (using the merge function above) with the other sorted arrays until you are back at the full length of the array
*/
function mergeSort(arr) {
    //base case
    if(arr.length <= 1) return arr;

    // split the array in half
    let mid = Math.floor(arr.length / 2)
    
    //using recursion
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    
    //using the previous merge function
    return merge(left, right);

}
console.log(mergeSort([10,24,76,73]));


/ Quick Sort */ // Time Complexity  best case O(n log n) worst case O(n*2)

/*
- Like merge sort, takes advantage of the fact that arrays of 1 or 0 are always sorted
- Works by selecting one element (called a pivot) and finding the index where the pivot should end up in the sorted array
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot 
*/

// Pivot Helper Function
/*
- This function will designate an element as the pivot
- Values less than the pivot are moved to the left, values greater than the pivot are moved to the right
- The order on either side of the pivot doesn't matter
- The helper should do this in place, it should not make a new array
- When complete the helper should return the index of the pivot
*/

//Pivot Helper Psuedocode
/*
- Function will take 3 arguments, an array, start index, end index (arr.length - 1)
- Choose the pivot from the start of the array
- Store the current pivot index in a variable (this will keep track of where the pivot should end up)
- Loop through the array
    - if the pivot is greater than the current element, increment the pivot index variable, then swap the current element with the element at the pivot index
- Swap the starting element (pivot) with the pivot index (whatever is currently at the index of what the new pivot incrrement is)
- Return the pivot index
*/

function pivotHelper(arr, start=0, end=arr.length - 1) {
    let pivot = arr[start];
    let swapIdx = start;
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    
    for(let i = start + 1; arr[i]; i++) {
        if(pivot > arr[i])  {
            swapIdx++
            swap(arr, swapIdx, i)

        }
    }
    // swap pivot index
    swap(arr, start, swapIdx)
    console.log('final array: ', arr);
    return swapIdx;
}

// console.log(pivotHelper([4,8,2,1,5,7,6,3]));


//Quick Sort Psuedocode
/*
- Call the pivot helper on the array
- When the helper returns the updated pivot index, we recursively call the pivot helper on the subarray to the left of that index and to the subarray to the right of that index
- Your base case occurs when a subarray has less than 2 elements 
*/

function quickSort(arr, left=0, right= arr.length - 1) {
    if(left < right) {
  let pivotIndex = pivotHelper(arr, left, right);
  //left
  quickSort(arr, left, pivotIndex - 1)
  //right
  quickSort(arr, pivotIndex + 1, right)
 }
 return arr;
}

console.log('quickSort: ',quickSort([11, 3, 6, 4, 9, 12,]));


/ Radix Sort */ //Time Complexity is O(nk)

/*
- Is an integer sorting alogorithm
- Does not use comparisons for sorting
- Exploits the fact that information about a size of a number is encoded in the number of digits 
*/


// Radix Sort Helper 1 (this returns the value in each number placement i.e 0 will return the integer in the ones place etc)

function getDigit(num, place) {
    return Math.floor(Math.abs(num)) / Math.pow(10, place) % 10
}

console.log(getDigit(1243, 0));

// Radix Sort Helper 2 (this helper will tell us how many digits are in a number)

function digitCount(num) {
    let count = 0;
    let arr = num.toString(10) // using a base of 10 for the number
    let arr1 = arr.split('')
    for(let i = 0; arr1[i]; i++) {
        if(arr1[i] !== '-') {
      count += 1
     }
    }
    return count
}

console.log('the integer count is: ', digitCount(0));

// Radix Sort Helper 3 (this will take an array of digits and tell us which number has the most digits)

function mostDigits(arr) {
    let ct = []
    for(let i = 0; arr[i]; i++) {
        ct.push(digitCount(arr[i]))
}
return Math.max(...ct)
}

console.log('most digits: ', mostDigits([12, 1, 345, 124578]));

// Radix Sort Pseudocode

/*
- Define a function that accepts an array of numbers
- Figure out how many digits the largest number has
- Loop from k up to that largest number of digits
- For each iteration of the loop:
  - create buckets for each digit 0-9 (basically an empty array that will have each index be another empty array)
  - place each number in the corresponding bucket based on the kth digit
-  
*/

function radix (arr) {
  let digits = mostDigits(arr)
  for(let i = 0; i < digits; i++) {

      let bucket = Array.from({length: 10}, () => [])
      for(let j = 0; j < arr.length; j++) {
          let num = getDigit(arr[j], i)
          bucket[num].push([arr[j]])
      }
       arr = [].concat(...bucket)
    
  }
  return arr;
}

console.log('radix check: ',radix([55, 3037, 1]));