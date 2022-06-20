class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

/**
 * Done with minBinary heap
 */
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let node = new Node(val, priority);
        this.values.push(node);
        if (this.values.length > 1)
            this.bubble();
    }

    dequeue() {
        let target = this.values[0];
        let last = this.values[this.values.length - 1];

        if (this.values.length >= 1) {
            this.values[0] = last;
            this.values.pop();

            this.sink();
        }

        return target;
    }

    bubble() {
        let index = this.values.length - 1;
        let target = this.values[index];

        while (true) {
            let pIndex = parseInt((index - 1) / 2);
            let parent = this.values[pIndex];

            if (target.priority < parent.priority) {
                this.values[index] = parent;
                this.values[pIndex] = target;
                index = pIndex;
            } else {
                break;
            }
        }
    }

    sink() {
        let index = 0;
        let length = this.values.length;
        let target = this.values[0];

        while (true) {
            let leftIdx = Math.floor(2 * index + 1);
            let rightIdx = Math.floor(2 * index + 2);

            let left, right, swapIndex = null;

            // both are smaller, choose smallest
            if (target < right && target < left) {
                if (right.priority < left.priority)
                    swapIndex = rightIdx;
                else
                    swapIndex = leftIdx;
            }

            // right is smaller
            if (leftIdx < length) {
                left = this.values[leftIdx];
                if (left.priority < target.priority)
                    swapIndex = rightIdx;
            }

            // left is smaller
            if (rightIdx < length) {
                right = this.values[rightIdx];
                if (swapIndex === null && right.priority < target.priority)
                    swapIndex = rightIdx;
            }

            if (swapIndex === null)
                break;

            this.values[index] = this.values[swapIndex]
            this.values[swapIndex] = target;
            index = swapIndex;
        }
    }
}

export default PriorityQueue;