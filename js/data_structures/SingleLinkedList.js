import Node from "./Node.js";

class SingleLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tails = null;
    }

    push(val) {
        // Create new node
        let node = new Node(val);

        if (this.head === null) {
            this.head = node;
            this.tails = node;
        } else {
            this.tails.next = node;
            this.tails = node;
        }

        // update length
        this.length++;

        return this;
    }

    pop() {
        if (this.length === 0) return undefined;

        let prev = this.head;
        let temp = prev;

        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }

        this.tails = prev;
        this.tails.next = null;

        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tails = null;
        }

        return temp;
    }

    shift() {
        if (this.length === 0) return undefined;
        let temp = this.head
        this.head = temp.next;

        this.length--;

        if (this.length === 0) {
            this.tails = null;
        }

        return temp;
    }

    unshift(val) {
        let node = new Node(val);

        if (this.head == null) {
            this.head = node;
            this.tails = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length)
            return null;

        let current = this.head;

        let counter = 0;
        while (counter !== index) {
            counter++;
            current = current.next;
        }

        return current;
    }

    set(index, val) {
        let node = this.get(index);
        if (node === null) return false;

        node.val = val;

        return true;
    }

    insert(index, val) {
        if (index < 0 || index >= this.length)
            return false;

        // insert at the end
        if (index === this.length) {
            this.push(val);
            return true;
        }

        // insert at the start
        if (index === 0) {
            this.unshift(val);
            return true;
        }

        // insert in other positions
        let target = this.get(index);
        if (target) {
            let prev = this.get(index - 1);
            let node = new Node(val);

            node.next = target;
            prev.next = node;

            this.length++;

            return true;
        }

        return false;
    }

    remove(index) {
        if (index < 0 || index >= this.length)
            return false;
        
        let target = null;

        // remove from end
        if (index === this.length - 1) {
            this.pop();
            return true;
        }

        // remove from start
        if (index === 0) {
            this.shift();
            return true;
        }

        target = this.get(index);
        if (target !== null) {
            let prev = this.get(index - 1);

            prev.next = target.next;
            target.next = null;

            this.length--;
            return true;
        }

        return false;
    }

    reverse() {
        // swap tail and head
        let current = this.tails;
        this.tails = this.head;
        this.head = current;

        let prev = null;
        let next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return this;
    }
}

let list = new SingleLinkedList();
