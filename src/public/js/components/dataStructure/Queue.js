/* A queue object */

class Queue {
  constructor(...items) {
    this._items = [];
  }

  enqueue(obj) {
    // Push items into the queue

    this._items.push(obj);
  }

  dequeue() {
    return this._items.shift();
  }

  peek() {
    return this._items[0];
  }

  isEmpty() {
    return this._items.length === 0;
  }
}

export default Queue;
