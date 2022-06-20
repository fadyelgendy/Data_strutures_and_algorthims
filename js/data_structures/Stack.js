import Node from "./Node.js";

class Stack {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    push (val) {
        let node = new Node(val);

        if (this.size == 0) {
            this.first = node;
            this.last = node;
        } else {
            node.next = this.first;
            this.first = node;
        }

        this.size++;
        return this.size;
    }

    pop() {
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

export default Stack;