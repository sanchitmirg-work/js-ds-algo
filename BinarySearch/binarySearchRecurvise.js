const array = [1,3,5,7,9,10,12,15]

const find = (arr, element) => {
    // baseCondition 
    if (arr.length === 0) {
        return false;
    }
    if (arr.length > 0) {
        
        let low = 0;
        let high = arr.length - 1;
        let mid = Math.round((low+high)/2);
        let guess = arr[mid]
        if (element === guess) {
            return mid
        } else if (guess > element) {
            let newArray = arr.slice(0, mid-1)
            return find(newArray, element)
        } else {
            let newArray = arr.slice(mid+1, arr.length)
            return find(newArray, element)
        }
    }
}

const answer = find(array, 12)
console.log(answer)