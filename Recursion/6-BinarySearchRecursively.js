const array = [1,3,5,7,9,10,12,15]

const binarySerchRecursion = (arg, findElement) => {
    if (arg.length === 1) {
        if (arg[0] === findElement) {
            return true
        } else {
            return false;
        }
    } else {
        const mid = arg.length / 2;
        if (arg[mid] === findElement) {
            return true;
        } else if (findElement < arg[mid]) {
            const firstHalf = arg.slice(0, mid) 
            return binarySerchRecursion(firstHalf, findElement)
        } else if (findElement > arg[mid]) {
            const secondHalf = arg.slice(mid, array.length)
            return binarySerchRecursion(secondHalf, findElement)
        } 
    }
}

const result = binarySerchRecursion(array, 15)

console.log(result)