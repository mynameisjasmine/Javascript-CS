// Wtite a function which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or return undefined if a pair does not exist.



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