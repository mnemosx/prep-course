/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */

class Queue {
  private elements: Array<number> = [];
  add(n: number) {
    this.elements.push(n);
  }
  remove() {
    this.elements.shift();
  }
}

// const q = new Queue();
// q.add(1);
// q.add(5);
// q.add(9);
// q.remove();
// console.log(q);

export { Queue };
