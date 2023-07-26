class ListNode {
  private next: ListNode | undefined;
  constructor(private data: number) {}

  getData() {
    return this.data;
  }

  getNextLinkedNode() {
    return this.next;
  }

  setNextLinkedNode(nextNode: ListNode | undefined) {
    this.next = nextNode;
  }
}

class LinkedList {
  private head: ListNode | undefined;
  private tail: ListNode | undefined;
  private lenght: number = 0;

  add(number: number) {
    const node = new ListNode(number);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail?.setNextLinkedNode(node);
      this.tail = node;
    }
    this.lenght++;
  }

  insertBegin(number: number) {
    const node = new ListNode(number);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.setNextLinkedNode(this.head);
      this.head = node;
    }

    this.lenght++;
  }

  insertInPosition(number: number, position: number) {
    if (position > this.lenght) {
      this.add(number);
    } else if (position == 0) {
      this.insertBegin(number);
    } else {
      const node = new ListNode(number);
      let currentPos = 0;
      let currentNode = this.head;
      while (currentNode && currentPos < position - 1) {
        currentNode = currentNode.getNextLinkedNode();
        currentPos++;
      }

      if (currentNode) {
        node.setNextLinkedNode(currentNode.getNextLinkedNode() as ListNode);
        currentNode.setNextLinkedNode(node);
      }

      this.lenght++;
    }
  }

  deleteFirst() {
    this.head = this.head?.getNextLinkedNode();
    if (this.lenght > 0) {
      this.lenght--;
    }
  }

  deleteLast() {
    if (!this.head) {
    } else if (this.head && !this.head.getNextLinkedNode()) {
      this.head = undefined;
    } else {
      let currentNode = this.head;
      while (currentNode.getNextLinkedNode()) {
        if (!currentNode.getNextLinkedNode()?.getNextLinkedNode()) {
          currentNode.setNextLinkedNode(undefined);
        } else {
          currentNode = currentNode.getNextLinkedNode() as ListNode;
        }
      }

      this.tail = currentNode;
    }
  }

  deleteInPosition(position: number) {
    if (position > this.lenght) {
      this.deleteLast();
    } else if (position == 0) {
      this.deleteFirst();
    } else {
      let currentNode = this.head;
      let currentPos = 0;
      let prew: ListNode | undefined;

      while (currentNode && currentPos < position) {
        prew = currentNode;
        currentNode.setNextLinkedNode(currentNode.getNextLinkedNode());
        currentPos++;
      }

      if (prew) {
        prew.setNextLinkedNode(prew.getNextLinkedNode()?.getNextLinkedNode());
      }
      if (this.lenght > 0) {
        this.lenght--;
      }
    }
  }

  fing(position: number) {
    if (position == 0) {
      return this.head;
    } else if (position >= this.lenght) {
      return this.tail;
    } else {
      let currentNode = this.head;
      let currentPos = 0;

      while (currentNode && currentPos < position) {
        currentNode = currentNode.getNextLinkedNode();
        currentPos++;
      }

      return currentNode;
    }
  }

  log() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode);
      if (currentNode.getNextLinkedNode()) {
        currentNode = currentNode.getNextLinkedNode();
      } else {
        currentNode = undefined;
      }
    }
  }
}

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.insertInPosition(4, 1);
list.deleteInPosition(1);

console.log(list.fing(1));
