class Graph {
  constructor() {
    this.adjacencyList = {};
    this.visitedList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  ddepthFirstRecursive(vrtx) {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;
    function helper(vrtx) {
      if (adjacencyList[vrtx]) return undefined;
      visited[vrtx] = true;
      result.push(vrtx);

      for (let i = 0; i < adjacencyList[vrtx]; i++) {
        if (!visited[vrtx]) {
          return helper(adjacencyList[vrtx][i]);
        }
      }
    }

    helper(vrtx);
    return result;
  }

  //wrong one go with actual solution
  depthFirstRecursive(vrtx) {
    let vertex = vrtx;
    let result = [];
    let stack = [];
    let visited = {};
    stack.push(vrtx);
    visited[vrtx] = true;
    while (stack.length != 0) {
      vertex = stack.pop(vrtx);
      if (!visited[vertex]) {
        visited[vertex] = true;
        this.adjacencyList[vertex].forEach((neighbor) => {
          result.push(neighbor);
        });
      }
    }

    return result;
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
g.depthFirstRecursive("A");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
