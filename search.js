// Linear search O(n)


function linSearch (arr, value) {
    return arr.indexOf(value)
}

console.log(linSearch([11, 22, 33, 44, 55], 8));

// Using a for loop

function linearSearch (arr, val) {
    for(let i = 0; i < arr.length;i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

console.log('looped search:', linearSearch([66, 77, 88, 99], 3));


// Binary Search O(log n) - only works on sorted arrays

// my verion of the indexOf method
function getIndex(arr,value) {
    for(i=0; i< arr.length; i++) {
      if(arr[i] === value) {
        return console.log(i)
      } else {
        return console.log('-1')
      }
    }
  }

// naive solution for binary search
function bsearch(arr, value) {
    let midValue = Math.floor(arr.length / 2)
    let left = arr[0]
    let right = arr[arr.length-1]
    let leftIndex = arr.indexOf(left)
    let rightIndex = arr.indexOf(right)
    let inputValueIndex = arr.indexOf(value)
  
    while(left < right) {
    if (arr.indexOf(value) === -1) {
      
        return 'This number is not in the array';
          }
    if (arr.indexOf(value) === midValue || inputValueIndex === leftIndex || inputValueIndex === rightIndex) {
              return inputValueIndex
          }
    if(inputValueIndex < midValue) {
      leftIndex++
      }
      //if leftIndex === inputValueIndex, return leftIndex, else start the loop over again
    if(leftIndex === inputValueIndex) {
       return leftIndex
    } 
  
    if(inputValueIndex > midValue) {
      rightIndex--
    }
  
    if(rightIndex === inputValueIndex) {
      return rightIndex
    }
      
    }  
    } 
    
    console.log('bin search',bsearch([22,33,44,55,58,60,66],58) );

    // refactored binary search function
    function updatedBSearch(arr, value) {

        let left = 0;
        let right = arr.length -1;
        let middle = Math.floor((left + right) / 2);
        
        while(arr[middle] !== value && left <= right) {
            if(value < arr[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
            middle = Math.floor((left + right) / 2)
            
          }
        
      
        console.log(left, middle, right)
        if(arr[middle] == value) {
        return middle;
      
        } else {
          return -1
        }
      }

console.log('updated:', updatedBSearch([22,33,44,55,58,60,66],33))
    

// A 2nd re-factor of binary search function
function refactoredBSearch(arr, value) {

    let left = 0;
    let right = arr.length -1;
    let middle = Math.floor((left + right) / 2);
    
    while(arr[middle] !== value && left <= right) {
        if(value < arr[middle])right = middle - 1;
        else left = middle + 1;
        middle = Math.floor((left + right) / 2)

        }
        return arr[middle] == value ? middle : -1
      }
    
  
    
  

console.log('refactored:',refactoredBSearch([22,33,44,55,58,60,66],33))



// String search naive solution

function strSearch (str1, str2) {
    let count = 0;
    let arr = [];
    
  
    for(i=0; str1[i]; i++) {
      for(j=0; j < str2.length; j++) {
          console.log(i, str2[j]);
       if(str2[j] !== str1[i + j]) {
        console.log('BREAK');
           break
           
          } 
        }
      }
    //   return arr
    }
  
    
  
  
  console.log(strSearch('hello', 'ell'))