//global variables
var elem = [];
var count = 0;
var trav = [];
var trav1 = [];
var flag = 0;
// bst class
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return  this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.find = find;
    this.remove = remove;
    this.removeNode = removeNode;
    this.getSmallest = getSmallest;
}

function insert(data) {
    var node = new Node(data, null, null);
    if (this.root == null) {
        this.root = node;
    }
    else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = node;
                    break;
                }
            }
            else {
                current = current.right;
                if (current == null) {
                    parent.right = node;
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + " ");
        trav.push(node.show());
        inOrder(node.right);
    }
}

function getSmallest(node) {
    var current = node;
    while (current.left != null) {
        current = current.left;
    }
    return current;
}

function find(data) {
    var current = this.root;
    while (current != null) {
        if (current.data == data) {
            return current;
        }
        else if (data < current.data) {
            current = current.left;
        }
        else {
            current = current.right;
        }
    }
    return null;
}

function remove(data) {
    node = removeNode(this.root, data);
    return node;
}

function removeNode(node, data) {
    if (node == null) {
        return null;
    }
    if (data == node.data) {
        if (node.left == null && node.right == null) {
            return null;
        }
    
    if (node.left == null) {
        return node.right;
    }
    if (node.right == null) {
        return node.left;
    }
    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, data);
    return node;
    }
    else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    }
    else {
        node.right = removeNode(node.right, data);
        return node;
    }
}

function ASL() {

}
function userinput() {
    var input = document.getElementById('userin');
    var num = parseInt(input.value);
    if (num.toString()!='NaN') {
        elem.push(num);
        count++;
        input.value = ''; 
        console.log(elem);
    }
}



function start() {
    //bst = new BST();
    if (count==0) 
        return null;
    else {
        var bst = new BST();
        for (var i=0;i<count;i++) {
            bst.insert(elem[i]);
        }
    }
    bst.inOrder(bst.root);
    var pos = document.getElementById('inorder');
    pos.innerHTML = trav;
    trav = [];
}

function reset1() {
    elem = [];
    var pos1= document.getElementById('inorder');
    pos1.innerHTML = null;
    console.log('is');
}

function finding() {
    var x = document.getElementById('findxx');
    x = parseInt(x.value);
    console.log(x);
    if (x.toString()!='NaN') {
        var node = bst.find(x);
        if (node!=null) {
            console.log('Found '+ x +' in the bst!');
            node = bst.remove(node);
            console.log(bst.root.data);
            trav = [];
            bst.inOrder(bst.root);
            var pos = document.getElementById('inorder1');
            pos.innerHTML = trav;
        }
        else {
            console.log('not found');
        }
    }    
}
var a = 3;
var b = 4;
var c = a + b;
var mybst = new BST();
mybst.insert(3);
mybst.insert(1);
mybst.insert(2);

mybst.inOrder(mybst.root);
var x = 2;
var node = mybst.find(x);
if (node!=null) {
    console.log('Found '+ x +' in the bst!');
    node = mybst.remove(node);
    console.log(mybst.root.data);
    console.log(mybst.root.left.data);
    console.log(mybst.root.left.right.data);
    mybst.inOrder(mybst.root);
}
