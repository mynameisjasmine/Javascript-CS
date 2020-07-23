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





