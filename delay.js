var x = 20,
    y = 20;


function setup() {
    createCanvas(500, 500)
    background(0);

}

function draw() {
    //
    // create(x, y);
    x += 4;
    y += 4;
    // console.log(x);
    translate(x, y);
    // setTimeout(create, 1000);
    setInterval(() => {
        fill(255);
        ellipse(0, 0, 30, 30);
    }, 1000);

}

function create() {
    fill(255);
    ellipse(0, 0, 30, 30);

}