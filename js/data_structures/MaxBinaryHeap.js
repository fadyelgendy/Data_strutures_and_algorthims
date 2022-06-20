class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        this.bubble();
    }

    bubble() {
        let index = this.values.length - 1;
        let target = this.values[index];

        while (index > 0) {
            let pIndex = Math.floor((index - 1) / 2);
            let parent = this.values[pIndex];

            if (parent < target) {
                this.values[pIndex] = target;
                this.values[index] = parent;
                index = pIndex;
            } else {
                break;
            }
        }
    }

    extractMax() {
        let target = this.values[0];
        let last = this.values[this.values.length - 1];

        if (this.values.length >= 1) {
            this.values[0] = last;
            this.values.pop();

            this.sink();
        }

        return target
    }

    sink() {
        let index = 0;
        let target = this.values[index];

        while (index < this.values.length - 1) {
            let leftIdx = Math.floor(2 * index + 1);
            let rightIdx = Math.floor(2 * index + 2);

            let left = this.values[leftIdx];
            let right = this.values[rightIdx];

            let swapIndex = null;

            // both is is larger, choose the largest
            if (target < right && target < left) {
                if (left > right)
                    swapIndex = leftIdx;
                else
                    swapIndex = rightIdx
            }

            // right is larger
            if (target < right)
                swapIndex = rightIdx;

            // left is larger
            if (target < left)
                swapIndex = leftIdx;

            if (swapIndex === null) break;

            this.values[index] = this.values[swapIndex];
            this.values[swapIndex] = target;
            index = swapIndex;
        }
    }
}

export default MaxBinaryHeap;