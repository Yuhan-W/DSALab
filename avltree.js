
function AVL() {
   this.root = null;
   this.getBalanceFactor = getBalanceFactor;
   this.getHeight = getHeight;
   this.insert = insert;
   this.inOrder = inOrder;
}

function Node(data, left, right) {
   this.data = data;
   this.left = left;
   this.right = right;
}

function getBalanceFactor(root) {
   return this.getHeight(root.left) - this.getHeight(root.right);
}
 
function getHeight(root) {
   let height = 0;
   if (root === null || typeof root == "undefined") {
          height = -1;
   } else {
          height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
   }
   return height;
}

function insert(data) {
   var node = new Node(data, null, null);
    // Check if the tree is empty
   if (this.root === null) {
      this.root = node;
          // Insert as the first element this.root = node;
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


function inOrder() {
   inOrderHelper(this.root);
}

function insertHelper(root, node) {
   if (root === null) {
       root = node;
    } else if (node.data < root.data) {
       // Go left!
      root.left = insertHelper(self, root.left, node);
       // Check for balance factor and perform appropriate rotation
      if (root.left !== null && self.getBalanceFactor(root) > 1) {
      if (node.data > root.left.data) {
          root = rotationLL(root);
      } else {
          root = rotationLR(root);
      }
   }
 } else if (node.data > root.data) {
    // Go Right! root.
    right = insertHelper(self, root.right, node);
    // Check for balance factor and perform appropriate rotation
    if (root.right !== null && self.getBalanceFactor(root) < -1) {
       if (node.data > root.right.data) {
          root = rotationRR(root);
       } else {
          root = rotationRL(root);
       }
    }
 }
 return root;
 }

function inOrderHelper(root) {
    if (root !== null) {
       inOrderHelper(root.left);
       console.log(root.data);
       inOrderHelper(root.right);
    }
}
 
function rotationLL(node) {
    let tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
}
 
function rotationRR(node) {
    let tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
}
 
function rotationLR(node) {
   node.left = rotationRR(node.left);
   return rotationLL(node);
}
 
function rotationRL(node) {
   node.right = rotationLL(node.right);
   return rotationRR(node);
}
