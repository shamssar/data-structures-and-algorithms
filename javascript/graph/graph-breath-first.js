'use strict';
class Vertex { //node
    constructor(value) {
        this.value = value;
    }
}

class Graph {
    constructor(){
this.adjacncyList=new Map();
    }


addVertex(value) {
    this.adjacencyList.set(value, []);
    return this.adjacencyList.get(value);
  }


  breadthFirst(vertex) {

    if (!vertex) return null;
    const queue = [vertex];
    const visited = [];
    let current;

    while (queue.length) {
      console.log(queue.length);
      current = queue.pop();
      let edges = this.adjacencyList.get(current);
      for (let i = 0; i < edges.length; i++) {
        if (!visited.includes(edges[i][0])) queue.unshift(edges[i][0]);
      }
      if (!visited.includes(current)) visited.push(current);
    }
    return visited;
  }


}

module.exports = {Graph,Vertex};
