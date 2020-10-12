// Bubble sort implementation - not very efficient, not commonly used


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


 function bubSort(arr) {
     
    for(let i = 0; arr[i]; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
              }
              console.log('this is i ', i); 
              console.log('the array: ', arr);

          }
     }
     return arr
 }

//  function bubSort(arr) {
//      let end = arr.length - 1
//      for(let i = end; arr[i]; i--) {
//         for(let j = 0; j < end; j++) {
//             if(arr[j] > arr[j + 1]) {
//                 swap(arr, arr[j], arr[j + 1])
//             }

//         }
//      }
//      return arr;
//  }

 console.log(bubSort([5, 4, 3, 7]));