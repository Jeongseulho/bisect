class CircularQueue {
  constructor(maxSize) {
    this.element = [];
    this.maxSize = maxSize;
    this.length = 0;
    this.head = this.tail = -1;
  }

  isEmpty() {
    return this.length == 0;
  }

  enqueue(element) {
    if (this.length >= this.maxSize) throw new Error('Maximum length exceeded');
    this.tail++;
    this.element[this.tail % this.maxSize] = element;
    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) throw new Error('No elements in the queue');
    const value = this.getFront();
    this.element[this.head % this.maxSize] = null;
    this.head++;
    this.length--;
    return value;
  }

  getFront() {
    if (this.isEmpty()) throw new Error('No elements in the queue');
    return this.element[this.head % this.maxSize];
  }

  clear() {
    this.element = new Array();
    this.length = 0;
    this.tail = this.head = -1;
  }
}
