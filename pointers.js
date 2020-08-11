// Wtite a function which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or return undefined if a pair does not exist.


/ Using 2 pointers at opposite ends of an array */
// brute force solution
function sumZero(arr) {
    for(let i =0; i < arr.length; i++){
        for(let j = i+1; j <arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero([-3, -2,-1,0,1,2, 3]));


// better solution

function addZero(arr) {
    //save the first index pointer as a var
    let left = 0;
    //save the last index pointer as a var
    let right = arr.length - 1;

    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left, arr[right]]];

        } else if(sum > 0) {
            right--;

        } else {
            left++
        }
    }
}


// Implement a function which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

/ Using 2 pointers starting at the front of an array */


// better solution O(n) runtime

function countUniqueValues(arr) {
  
  if(arr.length === 0) return 0;
        
  let i = 0;
  for(let j = 1; j < arr.length; j++) {
      if(arr[i] !== arr[j]) {
          i++;
          arr[i] = arr[j]
      }
  }
  return i + 1;
}


console.log('unique:',countUniqueValues([1,1,2,3]));


