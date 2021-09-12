function sum(input) {
    if (input === undefined) {
        return sum.currentSum
    }
    if (sum.currentSum === undefined) {
        sum.currentSum = input
    } else {
        sum.currentSum += input
    }
    return this.sum
}

console.log(sum(1)(2)(5)(10)())