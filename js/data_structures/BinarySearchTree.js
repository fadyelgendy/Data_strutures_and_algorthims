import Node from "./BinaryTreeNode.js";
import Queue from "../data_structures/Queue.js";


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let node = new Node(val);
        if (!this.root) {
            this.root = node;
        } else {
            let current = this.root;
            while (current) {
                if (node.val < current.val) { // to left
                    if (!current.left) {
                        current.left = node;
                        return this;
                    }

                    current = current.left;
                } else if (node.val > current.val) { // to right
                    if (!current.right) {
                        current.right = node;
                        return this;
                    }

                    current = current.right;
                } else {
                    break;
                }
            }
        }
    }

    find(val) {
        if (!this.root)
            return null;

        let current = this.root;
        while (current) {
            if (current.val === val)
                return current;

            if (val < current.val) {
                if (!current.left)
                    return null

                current = current.left;
            } else if (val > current.val) {
                if (!current.right)
                    return null;

                current = current.right;
            } else {
                return null;
            }
        }
    }

    bfs() {
        if (!this.root) 
            return undefined;

        let visisted = new Queue();
        let values = [];
        
        // add root to queue
        visisted.enqueue(this.root);
        
        while(visisted.size > 0) {
            let current = visisted.dequeue();
            values.push(current.val);

            if (current.left) {
                visisted.enqueue(current.left);
            }

            if (current.right) {
                visisted.enqueue(current.right);
            }
        }

        return values;
    }

    dfsPreorder () {
        if (!this.root)
            return undefined;

        let values = [];

        function traverse(node) {
            values.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
    
        return values;
    }

    dfsPostoder() {
        if (!this.root)
            return undefined;

        let values = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            values.push(node.val);
        }

        traverse(this.root);
        return values;
    }

    dfsInorder() {
        if (!this.root)
            return undefined;

        let values = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            values.push(node.val);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return values;
    }
}

export default BinarySearchTree;