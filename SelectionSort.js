const arrayToSort = [23, 41, 12, 2, 35, 19]

// const arrayToSort = [ 23, 41, 35 ];
const findSmallestIndexAndNumber = (arrayArg) => {
    let smallestNumber = arrayArg[0];
    let smallestIndex = 0;
    let j = 0;
    for(j; j<arrayArg.length; j++) {
        if (arrayArg[j] < smallestNumber) {
            smallestNumber = arrayArg[j]
            smallestIndex = j
        }
    }
    return { smallestNumber, smallestIndex }
}

const selectionSort = (arrayArg) => {
    const newArray = [];
    let i = arrayArg.length
    while(i > 0) {
        const { smallestNumber, smallestIndex} = findSmallestIndexAndNumber(arrayArg)
        newArray.push(smallestNumber);
        arrayArg.splice(smallestIndex, 1);
        i = arrayArg.length;
    }
    return newArray;
}

const sortedArray = selectionSort(arrayToSort);

console.log(sortedArray);