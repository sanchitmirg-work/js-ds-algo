
const graph = {};
graph['sanchit'] = ['a', 'b', 'c'];
graph['a'] = ['d', 'e', 'f', 'g'];
graph['b'] = ['h', 'i']
graph['c'] = []
graph['d'] = []
graph['e'] = []
graph['f'] = []
graph['g'] = []
graph['h'] = []
graph['i'] = [];

const breadthFirstSearch = (rootNode, element) => {

    let queue = [];
    queue.push(...graph[rootNode]);
    while (queue.length) {
        const firstElement = queue.shift();
        console.log(firstElement)
        if (firstElement === element) {
            return true;
        } else {
            queue = [...queue, ...graph[firstElement]]
        }
    }
    return false;

}

//is sanchit connected to i
const result = breadthFirstSearch('sanchit', 'i')
console.log(result);