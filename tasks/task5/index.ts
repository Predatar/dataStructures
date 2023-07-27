{
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

    find(position: number) {
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

  for (let i = 0; i < 1_000_000; i++) {
    list.add(+(Math.random() * 100).toFixed(2));
  }

  console.log('LinkedList-----------------------');

  console.time('Add-end');
  list.add(132);
  console.timeEnd('Add-end');

  console.log('-----------------------');

  console.time('Add-in-position');
  list.insertInPosition(123, 500000);
  console.timeEnd('Add-in-position');

  console.log('-----------------------');

  console.time('Find-last');
  list.find(1_000_002);
  console.timeEnd('Find-last');

  console.log('-----------------------');

  console.time('Find-in-position');
  list.find(500000);
  console.timeEnd('Find-in-position');

  console.log('-----------------------');

  console.time('Delete-last');
  list.deleteLast();
  console.timeEnd('Delete-last');

  console.log('-----------------------');

  console.time('Delete-in-position');
  list.deleteInPosition(500000);
  console.timeEnd('Delete-in-position');


	class ArrayList<T> {
		private array: T[];
	
		constructor() {
			this.array = [];
		}
	
		add(item: T): void {
			this.array.push(item);
		}

		addInPositin(item: T, position: number) {
			this.array.splice(position, 0, item);
		}
	
		get(index: number): T | undefined {
			return this.array[index];
		}
	
		remove(index: number): void {
			if (index >= 0 && index < this.array.length) {
				this.array.splice(index, 1);
			}
		}

		removeLast() {
			this.array.pop();
		}
		removeFirst() {
			this.array.shift();
		}

		getLastItem() {
			return this.array[this.array.length - 1];
		}

		getInPosition(position: number) {
			return this.array[position];
		}
	
		size(): number {
			return this.array.length;
		}
	
		isEmpty(): boolean {
			return this.array.length === 0;
		}
	
		clear(): void {
			this.array = [];
		}
	
		toArray(): T[] {
			return [...this.array];
		}
	}
	
	const arrayList = new ArrayList<number>();

  for (let i = 0; i < 1_000_000; i++) {
    arrayList.add(+(Math.random() * 100).toFixed(2));
  }

	console.log();
  console.log('ArrayList-----------------------');

  console.time('Add-end');
  arrayList.add(132);
  console.timeEnd('Add-end');

  console.log('-----------------------');

  console.time('Add-in-position');
  arrayList.addInPositin(123, 500000);
  console.timeEnd('Add-in-position');

  console.log('-----------------------');

  console.time('Find-last');
  arrayList.getLastItem();
  console.timeEnd('Find-last');

  console.log('-----------------------');

  console.time('Find-in-position');
  arrayList.getInPosition(500000);
  console.timeEnd('Find-in-position');

  console.log('-----------------------');

  console.time('Delete-last');
  arrayList.removeLast();
  console.timeEnd('Delete-last');

  console.log('-----------------------');

  console.time('Delete-in-position');
  arrayList.remove(500000);
  console.timeEnd('Delete-in-position');
}
