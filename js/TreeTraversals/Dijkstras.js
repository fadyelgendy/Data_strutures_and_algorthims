import PriorityQueue from "../data_structures/PriorityQueue.js";

class Dijkstras {
    constructor(graph) {
        this.graph = graph;
    }

    run(start, end) {
        let distances = {};
        let priority = new PriorityQueue();
        let previous = {};
        let path = [];
        let current;

        for (let vertex in this.graph.adjacentlist) {
            if (vertex !== start) {
                distances[vertex] = Infinity;
                priority.enqueue(vertex, Infinity);
            } else {
                distances[vertex] = 0;
                priority.enqueue(vertex, 0);
            }

            previous[vertex] = null;
        }
        
        while (priority.values.length !== 0) {
            current = priority.dequeue().val;
            if (current === end) {
                while(previous[current]) {
                    path.push(current);
                    current = previous[current];
                }

                break;
            }

            this.graph.adjacentlist[current].forEach((neigbor) => {
                let totalDistance = distances[current] + neigbor.weight;

                if (totalDistance < distances[neigbor.node]) {
                    distances[neigbor.node] = totalDistance;
                    previous[neigbor.node] = current;
                    priority.enqueue(neigbor.node, totalDistance);
                }
            });
        }

        return path.concat(current).reverse();
    }
}

export default Dijkstras; 