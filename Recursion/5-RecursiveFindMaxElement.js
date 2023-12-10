const array = [1,12,3,40,10]

const findMaxRecursive = (arg, max = 0) => {
    if (arg.length === 1) {
        if (arg[0] > max ) {
            return arg[0]
        } else {
            return max
        }
    } else {
        max = arg[0] > max ? arg[0] : max
        arg.splice(0,1)
        return findMaxRecursive(arg, max);
    }
}

const findMaxIterative = (arg) => {
    let max = 0;
    for (let i = 0; i<arg.length; i++) {
        if (arg[i] > max) {
            max = arg[i]
        }
    }
    return max;
}

// const result = findMaxIterative(array)

const result = findMaxRecursive(array);

console.log(result);