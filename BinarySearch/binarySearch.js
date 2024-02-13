const array = [1,3,5,7,9,10,12,15]

const find = (arr, element) => {
    let low = 0;
    let high = arr.length - 1;
    while(low <= high) {
        let guessIndex = Math.round((low+high)/2);
        let guessElement = arr[guessIndex];
        if (element === guessElement) {
            return guessIndex
        } else if (element < guessElement) {
            high = guessIndex - 1;
        } else {
            low = guessIndex + 1;
        }
    }
}

const answer = find(array, 15)
console.log(answer)