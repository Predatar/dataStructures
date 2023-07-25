class Stack<T> {
  private stack: T[] = [];
  private TOP: number = -1;

  isEmpty(): boolean {
    return this.stack.length < 1;
  }

  push(value: T) {
    this.stack.push(value);
    this.TOP++;
  }

  pop() {
    if (!this.isEmpty()) {
      this.TOP--;
      return this.stack.pop();
    } else {
      console.log('Stack is empty');
    }
  }

  peek() {
    return this.stack[this.TOP];
  }
}

const stack = new Stack<number>();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);