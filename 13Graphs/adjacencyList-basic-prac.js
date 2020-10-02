class Graph {
  constructor() {
    this.adjacencylist = {};
  }

  addVertex(key) {
    if (this.adjacencylist[key]) this.adjacencylist[key] = [];
  }

  addEdge(v1, v2) {
    if (this.adjacencylist[v1]) this.adjacencylist[v1].push(v2);
    if (this.adjacencylist[v2]) this.adjacencylist[v2].push(v1);
  }

  removeEdge(v1, v2) {
    if (this.adjacencylist[v1].length === 1) this.adjacencylist[v1] = [];
    if (this.adjacencylist[v2] === 1) {
      this.adjacencylist[v2] = [];
    }

    if (this.adjacencylist[v1]) {
      for (let i = 0; i < this.adjacencylist[v1].length; i++) {
        if (this.adjacencylist[v1][i]) {
          this.adjacencylist[v1].shift(0, i);
        }
      }
    }

    if (this.adjacencylist[v2]) {
      for (let i = 0; i < this.adjacencylist[v2].length; i++) {
        if (this.adjacencylist[v2][i]) {
          this.adjacencylist[v2].shift(0, i);
        }
      }
    }
  }
}
