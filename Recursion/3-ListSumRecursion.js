const arrayToSum = [2,3,4,5]

const sumUsingRecursion = (array) => {
    if (array.length === 1) {
        return array[0]
    }
    const element = array[0]
    array.splice(0, 1);
    return element + sumUsingRecursion(array)
}

const result = sumUsingRecursion(arrayToSum)

console.log(result)