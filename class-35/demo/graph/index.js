class Vertex {
  constructor(value) {
    this.value = value;
  }
}
class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }
  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
  }
  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      throw new Error('INVALID NODE');
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }
  getNeighbors(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      throw new Error('__ERROR__ Invalid Vertex', vertex);
    }
    return this._adjacencyList.get(vertex);
  }
  printAll() {
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      console.log(vertex);
      console.log(edge);
    }
  }
}

const graph = new Graph();

const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);

graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);

graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, three);
graph.addDirectedEdge(ten, seven);
graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(eight, seven);
/*
const ten = new Vertex(10);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);

graph.addVertex(ten);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(eight);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(seven, eight);
*/
console.log(graph);
graph.printAll();
