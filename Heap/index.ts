class Heap {
  private heap: number[] = [];

  insert(value: number) {
    this.heap.push(value);
    this.heapifyUp();
  }

  public removeMin(): number | null | undefined {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown();
    return min;
  }

  public peek(): number | null {
    return this.heap.length === 0 ? null : this.heap[0];
  }

  public size(): number {
    return this.heap.length;
  }

  private swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  private getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  private getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  private heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);

      if (this.heap[parentIndex] < this.heap[currentIndex]) {
        this.swap(parentIndex, currentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  private heapifyDown(): void {
    let currentIndex = 0;

    while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);
      const smallerChildIndex =
        this.heap[rightChildIndex] < this.heap[leftChildIndex] ? rightChildIndex : leftChildIndex;

      if (this.heap[currentIndex] > this.heap[smallerChildIndex]) {
        this.swap(currentIndex, smallerChildIndex);
        currentIndex = smallerChildIndex;
      } else {
        break;
      }
    }
  }
}

const heap = new Heap();
heap.insert(5);
heap.insert(3);
heap.insert(7);
heap.insert(2);
heap.insert(9);


console.log(heap);
