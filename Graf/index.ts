// First, let's define the interfaces for the graph nodes and edges.

interface GNode<T> {
  value: T;
  edges: Edge<T>[];
}

interface Edge<T> {
  node: GNode<T>;
  weight?: number;
}

// Now, we'll define the Graph class.

class Graph<T> {
  private nodes: GNode<T>[];

  constructor() {
    this.nodes = [];
  }

  // Add a new node to the graph
  addNode(value: T): GNode<T> {
    const newNode: GNode<T> = { value, edges: [] };
    this.nodes.push(newNode);
    return newNode;
  }

  // Add a new edge between two nodes with an optional weight
  addEdge(node1: GNode<T>, node2: GNode<T>, weight?: number): void {
    const edge1: Edge<T> = { node: node2, weight };
    const edge2: Edge<T> = { node: node1, weight };
    node1.edges.push(edge1);
    node2.edges.push(edge2);
  }

  // Get all nodes in the graph
  getNodes(): GNode<T>[] {
    return this.nodes;
  }

  // Breadth-first search algorithm
  breadthFirstSearch(startNode: GNode<T>): T[] {
    const visited: Set<GNode<T>> = new Set();
    const queue: GNode<T>[] = [startNode];
    const result: T[] = [];

    while (queue.length) {
      const currentNode = queue.shift()!;
      if (!visited.has(currentNode)) {
        visited.add(currentNode);
        result.push(currentNode.value);
        for (const edge of currentNode.edges) {
          queue.push(edge.node);
        }
      }
    }

    return result;
  }

  // Depth-first search algorithm
  depthFirstSearch(startNode: GNode<T>): T[] {
    const visited: Set<GNode<T>> = new Set();
    const result: T[] = [];

    function dfs(node: GNode<T>) {
      visited.add(node);
      result.push(node.value);
      for (const edge of node.edges) {
        if (!visited.has(edge.node)) {
          dfs(edge.node);
        }
      }
    }

    dfs(startNode);
    return result;
  }
}

// Example usage:

// Create a new graph
const graph = new Graph<number>();

// Add nodes
const node1 = graph.addNode(1);
const node2 = graph.addNode(2);
const node3 = graph.addNode(3);
const node4 = graph.addNode(4);

// Add edges
graph.addEdge(node1, node2);
graph.addEdge(node1, node3);
graph.addEdge(node2, node4);
graph.addEdge(node3, node4);

// Perform BFS and DFS
console.log('BFS:', graph.breadthFirstSearch(node1)); // Output: [1, 2, 3, 4]
console.log('DFS:', graph.depthFirstSearch(node1));   // Output: [1, 2, 4, 3]
