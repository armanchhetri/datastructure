/// <reference path="./p5.global-mode.d.ts" />


let b = new BST();
var msg = "WELCOME";


// let theta;
var angle = 35;
let input = [],
    button = [];


var data = "atish";
b.insert(20, data);
b.insert(10, 91);
b.insert(6, "arman");
data = new Array('i', "we", "they", 23.9);
b.insert(14, data);
b.insert(30, "arman");
b.insert(25, "arman");
b.insert(45, "89");
// b.insert(9, 343);
// b.insert(10, 24);
// b.remove(11);
// b.insert(1, "hlkag");
// b.insert(12, 8989);
// b.remove(10);
// b.remove(1);
var theta;

function setup() {
    let can = createCanvas(window.innerWidth, window.innerHeight - 65);

    //input section
    input[1] = createInput();
    input[1].attribute('placeholder', 'key');
    input[1].position(40, 90);


    input[2] = createInput().attribute('type', 'text');
    input[2].attribute('placeholder', 'data');
    input[2].position(input[1].x, input[1].y + input[1].height + 4);


    input[3] = createInput();
    input[3].attribute('placeholder', 'key');
    input[3].position(input[1].x, input[2].y + input[2].height + 4);


    input[4] = createInput();
    input[4].attribute('placeholder', 'key');
    input[4].position(input[1].x, input[3].y + input[3].height + 4);


    //button section
    button[1] = createButton('CREATE');
    button[1].position(input[1].x + input[1].width + 12, input[1].y);
    button[1].mousePressed(createNewTree);
    button[1].attribute('class', 'button');


    button[2] = createButton('INSERT');
    button[2].position(input[2].x + input[2].width + 12, button[1].y + button[1].height + 32);
    button[2].mousePressed(createTree);
    button[2].attribute('class', 'button');


    button[3] = createButton('DELETE');
    button[3].position(input[3].x + input[3].width + 12, button[2].y + button[2].height + 32);
    button[3].mousePressed(Delete);
    button[3].attribute('class', 'button');


    button[4] = createButton('SEARCH');
    button[4].position(input[4].x + input[4].width + 12, button[3].y + button[3].height + 32);
    button[4].mousePressed(search);
    button[4].attribute('class', 'button');

    button[5] = createButton('InOrder');
    button[5].position(input[4].x + input[4].width + 35, button[4].y + button[4].height + 32);
    button[5].mousePressed(PressedInorder);
    button[5].attribute('class', 'butt');

    button[6] = createButton('PostOrder');
    button[6].position(input[4].x, button[4].y + button[4].height + 32);
    button[6].mousePressed(PressedPostorder);
    button[6].attribute('class', 'butt');

    button[7] = createButton('PreOrder');
    button[7].position(input[4].x, button[6].y + button[6].height + 32);
    button[7].mousePressed(PressedPreorder);
    button[7].attribute('class', 'butt');


    console.log("Hello world");

    noLoop();

}
var x;


function draw() {
    background(100, 210, 140);
    stroke(255);




    theta = (3.1415926 / 180.0) * angle;
    x = width * (3 / 5);
    translate(x, 50);

    b.preorder(b.root, theta, 200);
    // if (err === true)
    ShowText(msg);

    // else ShowText(inor);

}



function keyPressed() {
    // redraw();
    if (keyCode === LEFT_ARROW) {
        angle -= 2;
        if (angle < 8) {
            angle = 35;
        }
        redraw();

    } else if (keyCode === RIGHT_ARROW) {
        angle += 2;
        if (angle > 70) {
            angle = 35;
        }
        redraw();
    }

}

function createNewTree() {
    if (input[1].value() === '') {
        fill(255);
        msg = "Please Enter A key";
        redraw();
        return;
    } else {
        msg = "Created New Tree with  " + input[1].value();

        b = new BST();
        b.insert(parseInt(input[1].value()), input[2].value());
    }
    redraw();

}

function createTree() {
    if (input[1].value() === '') {
        fill(255);
        msg = "Please Enter A key";
        redraw();
        return;
    } else {
        msg = "Inserted  " + parseInt(input[1].value());
        b.insert(parseInt(input[1].value()), input[2].value());
        // b.inorder();
    }
    redraw();
}

function Delete() {
    if (input[3].value() === '') {
        fill(255);
        msg = "Please Enter A key";
        redraw();
        return;
    } else {
        b.remove(parseInt(input[3].value()));
        msg = "Deleted  ";
        redraw();

    }
}

function search() {
    if (input[4].value() === '') {
        fill(255);
        msg = "Please Enter A key";
        redraw();
        return;
    } else {
        let v = b.search(parseInt(input[4].value()));
        if (v === null)
            msg = "Nothing Found";
        else msg = "Data is: " + v;

    }
    redraw();

}

function ShowText(val) {

    push();
    stroke(0, 255, 0);
    strokeWeight(3);
    fill(135, 76, 175, 200);
    rect(-width * (3 / 5) + 40, 330, 380, 70);
    // sleep(200);
    fill(0);
    noStroke();
    // textStyle(BOLDITALIC);
    // fontSize(12);

    textSize(20);
    text(val, -width * (2 / 3) + 154, 365);
    pop();
}

//for graphical inordering
function PressedInorder() {
    msg = [];
    inorder(b.root);
    theLoop(msg, msg.length);
}

function inorder(node) {
    if (node) {
        {
            inorder(node.left);
            msg.push(node.key);
            inorder(node.right);
        }
    }
}

//for graphical preordering
function PressedPreorder() {
    msg = [];
    preorder(b.root);
    console.log("hey");
    theLoop(msg, msg.length);
}

function preorder(node) {
    if (node) {
        {
            msg.push(node.key);
            preorder(node.left);
            preorder(node.right);
        }
    }
}

//for graphical postordering
function PressedPostorder() {
    msg = [];
    postorder(b.root);
    theLoop(msg, msg.length);
}

function postorder(node) {
    if (node) {
        {
            postorder(node.left);
            postorder(node.right);
            msg.push(node.key);
        }
    }
}


function theLoop(msg, i) {
    setTimeout(function() {
        b.search(msg[msg.length - i]);
        redraw();
        if (--i) { // If i > 0, keep going
            theLoop(msg, i); // Call the loop again
        }
    }, 1000);
};