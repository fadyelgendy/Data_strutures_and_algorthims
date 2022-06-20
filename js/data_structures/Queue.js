import Node from "./Node.js";

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let node = new Node(val);

        if (this.size === 0) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    dequeue() {
        if (this.size === 0)
            return null;
        let target = this.first;

        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = target.next;
            target.next = null;
        }

        this.size--;
        return target.val;
    }

    getSize() {
        return this.size;
    }
}

export default Queue;