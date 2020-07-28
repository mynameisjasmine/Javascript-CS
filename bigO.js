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





