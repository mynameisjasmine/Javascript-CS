// add up to n

function addupto(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(addupto(7))

// this solution is more efficient (i.e faster)

function addup(n) {
   return n * (n + 1) /2
}

console.log(addup(6))


//Logarithms are the inverse of exponents. For example: log2(8) = 3; this can be evaluated as: what to the power of 2 equals 8? The answer is 3, 2 * 2 * 2 = 8

// The most common logarithms are binary logarithms (ie log2) another common one is base 10 (ie log10)

let ar = [12, 15, 2, 5, 5,]
function sorting(arr) {
    return arr.sort()
}

console.log(sorting(ar));

// function takes in a string and returns a count of each character in the string

function countChar(str) {
    let count =  str.split("")
    return count.length;
    
}

console.log(countChar("hello"));
