/* SPACE COMPLEXITY */


// Most primitives (booleans, numbers, undefined, null) are constant space

// Strings require O(n) space (where n is the string length)

// Reference types are generally O(n) where n is the length (for arrays) or the number of keys (for objects)


// The function below takes O(1) space, because the only things updating in the function are "total" and "i", both beign numbers

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// The function below takes O(n) space, because we are pushing onto the new array and updating the length

function double(arr) {
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
        
    }
    return newArr
}

console.log(double([1,2,3]));