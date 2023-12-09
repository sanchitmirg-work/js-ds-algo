function factorial(n)  {
    if (n === 1) {
        return 1
    }
    return n * (n-1)
}

const result = factorial(3)

console.log(result)