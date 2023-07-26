class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  // Вставка нового значения в дерево
  insert(val: number): void {
    const newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: TreeNode, newNode: TreeNode): void {
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Поиск значения в дереве
  search(val: number): boolean {
    return this.searchNode(this.root, val);
  }

  private searchNode(node: TreeNode | null, val: number): boolean {
    if (node === null) {
      return false;
    }

    if (val < node.val) {
      return this.searchNode(node.left, val);
    } else if (val > node.val) {
      return this.searchNode(node.right, val);
    } else {
      return true; // Значение найдено
    }
  }

  // Обход дерева в порядке "in-order" (левый -> корень -> правый)
  inOrderTraversal(): number[] {
    const result: number[] = [];
    this.inOrderTraversalNode(this.root, result);
    return result;
  }

  private inOrderTraversalNode(node: TreeNode | null, result: number[]): void {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, result);
      result.push(node.val);
      this.inOrderTraversalNode(node.right, result);
    }
  }
}

// Пример использования двоичного дерева
const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);

console.log("In-order traversal:", binaryTree.inOrderTraversal()); // [2, 3, 4, 5, 7]
console.log("Search 4:", binaryTree.search(4)); // true
console.log("Search 6:", binaryTree.search(6)); // false
