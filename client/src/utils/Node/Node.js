// Basic node of Tree
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
    remChildren(){
        this.left = null;
        this.right = null;
    }
}

export default Node;