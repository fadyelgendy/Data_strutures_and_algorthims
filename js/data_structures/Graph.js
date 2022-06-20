import Stack from "./Stack.js";
import Queue from "./Queue.js";

class Graph {
    constructor() {
        this.adjacentList = {};
    }

    addVertex(vertex) {
        if (!this.adjacentList[vertex])
            this.adjacentList[vertex] = [];
    }

    addEdge(vtx1, vtx2) {
        let vertex1 = this.adjacentList[vtx1];
        let vertex2 = this.adjacentList[vtx2];

        if (vertex1 !== undefined && vertex2 !== undefined) {
            vertex1.push(vtx2);
            vertex2.push(vtx1);
        }

        return undefined;
    }

    removeEdge(vtx1, vtx2) {
        let vertex1 = this.adjacentList[vtx1];
        let vertex2 = this.adjacentList[vtx2];

        if (vertex1 !== undefined && vertex2 !== undefined) {
            this.adjacentList[vtx1] = this.adjacentList[vtx1].filter((edg) => edg !== vtx2);
            this.adjacentList[vtx2] = this.adjacentList[vtx2].filter((edg) => edg !== vtx1);
        }

        return undefined;
    }

    removeVertex(vertex) {
        let edges = this.adjacentList[vertex];

        if (edges !== undefined) {
            for (let edge of edges) {
                this.removeEdge(vertex, edge);
            }

            delete this.adjacentList[vertex];
        }

        return undefined;
    }

    dfs(vertex) {
        let visited = {};
        let result = [];
        const adjacentList = this.adjacentList;

        function traverse(vertex) {
            if (!vertex) return;

            visited[vertex] = true;
            result.push(vertex);

            let neighbors = adjacentList[vertex];

            for (let neighbor of neighbors) {
                if (!visited[neighbor])
                    traverse(neighbor);
            }
        }

        traverse(vertex);

        return result;
    }

    dfsIterative(vertex) {
        let stack = new Stack();
        let visited = {};
        let result = [];

        stack.push(vertex);

        while (stack.getSize() !== 0) {
            let current = stack.pop();
            if (!visited[current]) {
                visited[current] = true;
                result.push(current);

                for (let neighbor of this.adjacentList[current])
                    stack.push(neighbor);
            }
        }

        return result;
    }

    bfs(vertex) {
        let queue = new Queue();
        let visited = {};
        let result = [];

        queue.enqueue(vertex);

        while (queue.getSize() !== 0) {
            let current = queue.dequeue();

            if (!visited[current]) {
                visited[current] = true;
                result.push(current);

                this.adjacentList[current].forEach((neighbor) => {
                    queue.enqueue(neighbor);
                });
            }
        }

        return result;
    }
}

export default Graph;