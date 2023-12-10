const array = [1,3,5,7,9,10,12,15]

const mid = array.length/2

const firstHalf = array.slice(0, mid)
const secondHalf = array.slice(mid, array.length)
console.log(array)
console.log(firstHalf)
console.log(secondHalf)