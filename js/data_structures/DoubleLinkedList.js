class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let node = new Node(val);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0)
            return undefined;

        let target = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = target.prev;
            prev.next = null;
            target.prev = null;
            this.tail = prev;
        }

        this.length--;
        return target;
    }

    shift() {
        if (this.length === 0)
            return undefined;

        let target = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = target.next;
            target.next = null;
            this.head.prev = null;
        }

        this.length--;
        return target;
    }

    unshift(val) {
        let node = new Node(val);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length)
            return null;

        if (index === 0)
            return this.head;

        if (index === this.length - 1)
            return this.tail;

        let current = null;
        let counter = 0;

        // start from the beginning
        if (index > Math.abs(this.length / 2)) {
            current = this.tail;
            counter = this.length - 1;
            while (counter !== index) {
                counter--;
                current = current.prev;
            }
        } else {
            current = this.head;
            while (counter !== index) {
                counter++;
                current = current.next;
            }
        }

        return current;
    }

    set(index, val) {
        let node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }

        return false;
    }

    insert(index, val) {
        if (index < 0 || index >= this.length)
            return false;

        // push
        if (index === this.length) {
            this.push(val);
            return true;
        }

        // unshift
        if (index === 0) {
            this.unshift(val);
            return true;
        }

        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let next = prev.next;

        newNode.prev = prev;
        newNode.next = next;

        prev.next = newNode;
        next.prev = newNode;

        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length)
            return false;

        // push
        if (index === this.length)
            return this.pop();

        // unshift
        if (index === 0)
            return this.shift();


        let target = this.get(index);
        let prev = this.get(index - 1);
        let next = prev.next;

        prev.next = target.next;
        next.prev = target.prev;

        target.next = null;
        target.prev = null;

        this.length--;
        return target;
    }

    reverse() {
        let current = this.head;

        let temp = null;

        while(current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        if (next) {
            this.head = temp.prev;
        }

        return this;
    }

    print() {
        let arr = [];
        let current = this.head;

        while (current) {
            arr.push(current.val);
            current = current.next;
        }

        console.log(arr);
    }
}

let list = new DoubleLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);


// list.pop();
// list.shift();
// list.unshift(3);
// list.insert(1, 6);
// list.insert(2, 11);
// list.remove(2);

// list.get(3);
// console.log(list.set(3, 10));

list.reverse();

console.log(list.print());
console.log(list);