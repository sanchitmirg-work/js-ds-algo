const arrayToSort = [3,5,2,1,4];

const quickSort = (arg) => {
    if (arg.length < 2) {   // This is the base case for CnD
        return arg;
    } else if (arg.length === 2) { // This is the base case for CnD
        if (arg[0] <= arg[1]) {
            return arg;
        } else {
            const a = arg[0];
            arg[0] = arg[1];
            arg[1] = a;
            return arg;
        }
    } else { // Here, we are trying to break the array to achieve the base case
        const pivot = arg[0]
        let smallerSubArray = [];
        let biggerSubArray = [];
        arg.forEach(element => {
            if (element < pivot) {
                smallerSubArray.push(element)
            } else if (element > pivot) {
                biggerSubArray.push(element)
            }
        });
        return [...quickSort(smallerSubArray), pivot, ...quickSort(biggerSubArray)]
    }
}

const result = quickSort(arrayToSort)

console.log(result)