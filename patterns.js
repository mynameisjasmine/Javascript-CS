// Common algorithm patterns

// Frequency Counter



// write a function which accepts 2 arrays. The function should return true if every value in the array has it's corresponding value squared in the 2nd array. The frequency of values must be the same


  // O(n2)  
function same(arr1, arr2) {
    // first check the length, if the length of the 2 arrays are not equal this is an automatic false
    if (arr1.length !== arr2.length) {
        return false
    }
    // use a for loop and indexOf to see which index in arr2 is the value of an index in arr1 squared (if the index is not found this means the squared value is not in arr2)
  for(i = 0; i < arr1.length; i++) {
      let correctIndex = arr2.indexOf(arr1[i] ** 2)
      if (correctIndex === -1) {
          return false
      }
      arr2.splice(correctIndex, 1)
  }
  return true // at the end of the process
}



// Sliding Window Pattern

// Write a function which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// brute force solution - O(n2)
function maxSubrraySum(arr, num) {
    if(num > arr.length) return null;
    let max = -Infinity // this helps if we get an array of negative numbers
    for(let i = 0; i < arr.length - num + 1; i++)  { // makes sure we can hit our target sum before the array ends
         temp = 0 // this var will store our sums
         for (let j = 0; j < num; j++) {
             temp += arr[i + j];
         }
         if(temp > max) {
             max = temp
         }
    }
   return max;
}

console.log(maxSubrraySum([2,4,5],2));

/ Sliding Window Twechnique*/
// Instead of re-looping through the array for each new set of numbers being added, this technique works by subtracting the first number at the beginning of the array and then adding the last number (at num) of the next set to be added. Time complexity is O(n) .
function slidingMaxSum (arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
     tempSum = maxSum
    for( let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i- num] + arr[i]
      maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}





// return a function within a function

function redundant(str) {
    return () => str;

}

console.log(redundant('hello'))

// given 2 positive integers, find out if the 2 numbers have the same frequency of digits
function sameFreq(num1, num2) {

}