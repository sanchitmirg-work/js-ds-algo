const array = [1,2,3,5]

const countElements = (arg) => {
    if (arg.length === 1) {
        return 1
    } else {
        arg.splice(0,1);
        return 1 + countElements(arg)
    }
}

const result = countElements(array);

console.log(result);