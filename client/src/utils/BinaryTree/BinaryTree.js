import {Node} from '../Node';
class BinaryTree{
    constructor(){
        this.root = null;
    }

    insertNode(root, node){
        if (root > node){
            if (root.left) {
                this.insertNode(root.left, node);
            } else {
                root.left = node;
            }
        }
        else if (node > root){
            if (root.right){
                this.insertNode(root.right, node);
            } else {
                root.right = node;
            }
        }
    }

    insert(val){
        if(! Number.isInteger(val)) return;
        const newNode = new Node(val);
        if (!this.root){
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }

    removeNode(val, node){
        if (!node) return null;
        else if(val < node.value){
            node.left = this.removeNode(val, node.left)
            return node;
        } else if (val > node.value) {
            node.right = this.removeNode(val, node.right)
            return node;
        } else {
            if (!node.left && !node.right){
                node = null;
                return node;
            }

            if (!node.left){
                node = node.right;
                return node;
            } else if (!node.right) {
                node = node.left;
                return node;
            }

            const oth = this.findMin(node.right);
            node.value = oth.value;

            node.right = this.removeNode(aux.val, node.right);
            return node;

        }

    }

    remove(val){
        if (!Number.isInteger(val)) return;
        this.root = this.removeNode(val, this.root);
    }

    empty(){
        return this.root == null;
    }

    clear(){
        this.root = null;
    }


}

export default BinaryTree;