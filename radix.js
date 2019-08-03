var num = [];
var h = 440;
var textboxlength = 45;
var x = [];
for (let i = 0, j = 60; i < 10; i++) {
    x.push(j);
    j += 80;
}

var boxes;
class box {
    constructor(text, x, y) {
        this.text = text;
        this.x = x;
        this.y = y;
    }
}

var container;
var divideby = 1;
var highest;
var msg = "WELCOME";


function countSort(arr, n, divider) {
    let out = [],
        count = new Uint8Array(10);

    for (let i = 0; i < n; i++) {
        count[Math.floor(arr[i] / divider) % 10]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
        out[count[Math.floor(arr[i] / divider) % 10] - 1] = arr[i];

        // console.log(count[Math.floor(arr[i] / divider)]);
        count[Math.floor(arr[i] / divider) % 10]--;
    }

    return out;

}

function radixSort(arr) {
    let n = arr.length;
    let max = Math.max.apply(Math, arr);
    for (let i = 1; Math.floor(max / i) > 0; i *= 10) {
        arr = countSort(arr, n, i);
    }
    return arr;

}

function setup() {


    button1 = createButton('Random Create');
    button1.position(1000, 300);
    button1.mousePressed(create);

    button2 = createButton('SORT');
    button2.position(1000, 300 + button1.height + 6);
    button2.mousePressed(release);



    // for (let i = 0, j = 100; i < 10; i++) {
    //     let temp = createVector(j, 430);
    //     container.push(temp);
    //     j += 80;
    // }
    console.log("Container = " + container);

    var c = createCanvas(window.innerWidth, window.innerHeight - 76);

    // num = radixSort(num);
    // console.log(num);
    noLoop();
}

function draw() {
    background(100, 200, 180);
    push();
    stroke(20, 180, 200);
    strokeWeight(26);
    fill(255, 255, 25, 10);
    rect(15, 13, window.innerWidth - 30, window.innerHeight - 76 - 30);
    pop();

    numberDraw();
    for (let i = 0; i < 10; i++) {
        push();
        strokeWeight(3);
        line(x[i], h, x[i] + textboxlength, h);
        textSize(15);
        text(i, x[i] + 20, h + 20);
        pop();
        // console.log(x);
    }
    textSize(15);
    text(msg, 60, 80);

}

function create() {
    num = [];
    highest = Math.floor(random(8, 30));
    for (let i = 0; i < highest; i++) {
        num.push(Math.floor(random(40, 4000)));
    }
    msg = "RANDOM NUMBERS CREATED";
    redraw();
}

function release() {
    // baseDraw(0);
    resetContainer();
    let n = num.length;
    let max = Math.max.apply(Math, num);

    drawContainer(divideby);

    // makeContainer(1, max);
    num = countSort(num, num.length, divideby);
    clear();
    msg = "Checking FIRST digit and the array is: ";
    redraw();
    makeContainer(divideby * 10, 2);



}


function makeContainer(i, digit) {
    setTimeout(function() {
        resetContainer();
        let n = num.length;
        let max = Math.max.apply(Math, num);

        drawContainer(i);

        // makeContainer(1, max);
        num = countSort(num, num.length, i);
        clear();
        msg = "Checking " + rank(digit) + " digit and the array is:";
        redraw();
        if (Math.floor(max / (i * 10)) > 0) {

            makeContainer(i * 10, ++digit);

            // resetContainer();
        } else {
            msg = "After checking " + rank(digit) + " digit final sorted array";
            redraw();
        }
    }, (num.length / 2) * 1500);
}

function drawContainer(divider, i = 0) {
    setTimeout(function() {
        let cont = Math.floor(num[i] / divider) % 10;
        rect(container[cont].x, container[cont].y - 20, textboxlength, 20, 6);
        text(num[i], container[cont].x + 6, container[cont].y - 5);
        container[cont].sub(0, 30);


        if (++i < highest) {

            drawContainer(divider, i);
        }
    }, 500);
}





function numberDraw() {
    boxes = [];
    for (let i = 0, h = 130, bx = 60; i < num.length; i++) {
        let b;
        if (bx >= 1100) {
            bx = 60;
            h += 24;
        }
        b = new box(num[i], bx, h);
        boxes.push(b);
        bx += textboxlength + 10;
    }
    // for (let bx of boxes) {
    loopNumberDraw(boxes, 0);
    // rect(bx.x - 15, bx.y - 15, textboxlength, 30, 10);
    // textSize(15);
    // text(bx.text, bx.x, bx.y);
    // }
    // console.log(boxes);
    // translate(100, 50);
    // for (let i = 0; i < num.length; i++) {
    //     rect(0, 0, textboxlength, 15);
    //     text(num[i], 10, 10);
    //     translate(textboxlength + 10, 0);
    // }
}

function loopNumberDraw(bx, i) {
    setTimeout(function() {
        rect(bx[i].x - 6, bx[i].y - 15, textboxlength, 20, 6);
        textSize(15);
        text(bx[i].text, bx[i].x, bx[i].y);
        if (i < boxes.length) {
            loopNumberDraw(bx, ++i)
        }

    }, 30);


}


function resetContainer() {
    container = [];
    for (let i = 0, j = 60; i < 10; i++) {
        let temp = createVector(j, 430);
        container.push(temp);
        j += 80;
    }
}

function rank(i) {
    switch (i) {
        case 1:
            return "FIRST";
            break;
        case 2:
            return "SECOND";
            break;
        case 3:
            return "THIRD";
            break;
        case 4:
            return "FOURTH";
            break;
        case 5:
            return "FIFTH";
            break;
        default:
            return "LARGE";
    }
}