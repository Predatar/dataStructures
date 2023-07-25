class Queue<T> {
  private queue: { [key: number]: T } = {};
  private FRONT = -1;
  private REAR = -1;
  private lenght = 0;

  isEmpty() {
    return Object.keys(this.queue).length == 0;
  }

  peek() {
    return this.queue[this.FRONT];
  }

  enqueue(value: T) {
    this.queue[++this.REAR] = value;
    this.lenght = Object.keys(this.queue).length;
    if (!this.isEmpty()) {
      this.FRONT = 0;
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      if (this.lenght - 1 == this.FRONT) {
        const deletedValeu = this.queue[this.FRONT];
        delete this.queue[this.FRONT];
        this.FRONT = -1;
        this.REAR = -1;
				this.lenght = 0;
        return deletedValeu;
      }
      const deletedValeu = this.queue[this.FRONT];
      delete this.queue[this.FRONT++];
      return deletedValeu;
    } else {
      console.log('Queue is empty');
    }
  }
}

const queue = new Queue<string>();

queue.enqueue('Max');
queue.enqueue('Vlad');
queue.enqueue('Sasha');
queue.enqueue('Artem');

console.log(queue.peek());

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);
