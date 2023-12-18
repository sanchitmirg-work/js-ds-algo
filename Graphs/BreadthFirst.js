
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

const breadthFirstSearch = (rootNode) => {

    let queue = [];
    queue.push(rootNode);

    while (queue.length) {
        const firstElement = queue.shift();
        console.log(firstElement);
        if (graph[firstElement].length) {
            queue = [...queue, ...graph[firstElement]]
        }
    }
}

breadthFirstSearch('sanchit')