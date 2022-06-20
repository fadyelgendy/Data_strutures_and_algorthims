class WeightedGraph {
    constructor() {
        this.adjacentlist = {};
    }

    addVertex(vertex) {
        if (!this.adjacentlist[vertex])
            this.adjacentlist[vertex] = [];
    }

    addEdge(vtx1, vtx2, weight) {
        let vertex1 = {node: vtx1, weight: weight};
        let vertex2 = {node: vtx2, weight: weight};

        this.adjacentlist[vtx1].push(vertex2);
        this.adjacentlist[vtx2].push(vertex1);
    }
}

export default WeightedGraph;