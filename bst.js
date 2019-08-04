/// <reference path="./p5.global-mode.d.ts" />


// var theta = radians(20);
class node {
    constructor(key, value) {
        this.key = key;
        this.data = value;
        this.left = null;
        this.right = null;
        this.stroke = false;
    }
}
var nodee;
class BST {
    constructor() {
        this.root = null;
    }
    insertNode(N, newnode) {
        if (N.key < newnode.key) {
            if (!N.right)
                N.right = newnode;
            else
                this.insertNode(N.right, newnode);
        } else if (N.key === newnode.key) return;
        else {
            if (!N.left)
                N.left = newnode;
            else
                this.insertNode(N.left, newnode);
        }

    }

    insert(key, value) {
        var newNode = new node(key, value);
        if (this.root === null)
            this.root = newNode;
        else {
            this.insertNode(this.root, newNode);
        }


    }
    isLeaf(N) {
        return ((N.left === null) && (N.right === null)) ? true : false;
    }
    hasOneChild(N) {
        if (N.left && !N.right) return N.left;
        else if (N.right && !N.left) return N.right;
        else return null;
    }


    findNode(N, key) {
        // var t = N;
        if (N.key < key) {
            if (!N.right)
                return null;
            else
                return this.findNode(N.right, key);
        } else if (key < N.key) {
            if (!N.left)
                return null;
            else
                return this.findNode(N.left, key);
        } else {
            N.stroke = true;
            return N;
        }


    }
    findSucc(Node) {
            if (Node.left === null)
                return Node;
            else
                return this.findSucc(Node.left);
        }
        // removeNode(rmNode) {
        //     var child = this.hasOneChild(rmNode);

    //     if (this.isLeaf(rmNode)) {
    //         rmNode = null;
    //         // console.log(rmNode.key);

    //     } else if (child) {
    //         console.log(child.key);
    //         rmNode.key = child.key;
    //         rmNode.data = child.data;
    //         child = null;
    //     } else {
    //         // console.log("hey here");

    //         var succ = this.findSucc(rmNode);
    //         rmNode.key = succ.key;
    //         rmNode.data = succ.data;
    //         this.removeNode(succ);
    //     }
    // }
    remove(key) {
        this.root = this.removeNode(this.root, key);

    }
    removeNode(node, key) {

        if (node === null)
            return null;
        else if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            var aux = this.findSucc(node.right);
            node.key = aux.key;
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.key);
            return node;
        }

    }
    preorder(node, theta, h = 100) {
        h *= 0.8;
        if (node !== null) {
            // node.stroke = true;
            push();
            fill(255);
            push();
            if (node.stroke == true) {
                stroke(20, 10, 220, 100);
                for (let i = 1; i < 16; i += 4) {

                    ellipse(0, 0, 70 - i, 70 - i);
                    fill(0);
                    text(node.key, -4, -1);
                    fill(255);
                }
            }

            pop();
            let e = ellipse(0, 0, 40, 40);
            // e.setAttributes("class", "ellipse");
            fill(0);
            textSize(15);
            text(node.key, -4, -1);
            rotate(theta);

            if (node.left) {
                strokeWeight(4);
                translate(0, 20);
                line(0, 0, 0, h - 20);
                strokeWeight(2);
                translate(0, h - 20);
            }
            this.preorder(node.left, theta * 0.5, h);
            pop();
            push();
            fill(255);
            // push();
            // if (node.stroke) {
            //     stroke(120, 33, 45);
            //     strokeWeight(4);
            // }
            // ellipse(0, 0, 30, 30);
            // pop();
            // fill(0);
            // text(node.key, 0, 6);
            rotate(-theta);

            if (node.right) {
                strokeWeight(4);
                translate(0, 20);
                line(0, 0, 0, h - 20);
                strokeWeight(2);
                translate(0, h - 20);
            }
            this.preorder(node.right, theta * 0.8, h, 25);
            pop();

        }
        if (node)
            node.stroke = false;

    }

    search(key) {
            nodee = this.findNode(this.root, key);
            if (node)
                return nodee.data;
            else return null;
        }
        // Max(node = this.root) {
        //     if (node.right === null)
        //         return node;
        //     else
        //         return this.Max(node.right);
        // }
        // Min(node = this.root) {
        //     if (node.left === null)
        //         return node;
        //     else
        //         return this.Min(node.left);
        // }
        // replaceWith(key, data) {
        //     this.findNode(this.root, key).data = data;
        // }
}

// function sleep(ms) {
//     const start = Date.now();
//     while (Date.now() < start + ms);
// }

// function holdOn(millisecondsToWait)

// {

//     setTimeout(function() {

//         console.log("Dude, hold on for asec!");

//         /* do something or nothing; this waits for a minute because 60000 milliseconds have been passed */

//     }, millisecondsToWait);

// }