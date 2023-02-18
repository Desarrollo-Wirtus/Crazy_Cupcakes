/*let max_distance;
var sz = [];

function setup() {
  sz = getResolution();
  let canvas_1 = createCanvas(int(sz[0]), int(sz[1]/10),WEBGL);
  canvas_1.parent('sketch_1');
  noStroke();
  max_distance = dist(0, 0, width, height);
}

function draw() {
  background(0);

  for (let i = 0; i <= width; i += 20) {
    for (let j = 0; j <= height; j += 20) {
      let size = dist(mouseX, mouseY, i, j);
      size = (size / max_distance) * 66;
      ellipse(i, j, size, size);
    }
  }
}

function getResolution() {
  return [screen.width, screen.height];
}*/

var w = window.innerWidth;
var h = window.innerHeight;  

let c = {
  "width": 400,
  "height": 400
}

// Setting up the Canvas
function setup() {
  var sz = [];
  sz = getResolution();
  //let canvas = createCanvas(int(sz[0]), int(sz[1]/10));
  let canvas = createCanvas(w, h/10);
  canvas.parent('sketch_1');
  background(255);
  
  noStroke();
  createSquares();
}

// Click reset
function mousePressed() {
  background(255);
  noStroke();
  createSquares();
}

// Where the Magic Happens (It draws)
function createSquares() {
  var sz = [];
  sz = getResolution();
  for (x=0; x<sz[0]; x=x+50) {
    for (y=0; y<sz[1]; y=y+50) {
      fill(randomColor());
      
      let sides = round(random(0, 3));
      let pos1 = round(random(0, 50));
      let pos2 = round(random(0, 50));
      
      if (sides == 0) { // top
        beginShape();
        vertex(x, y);
        vertex(x+50, y);
        vertex(x+50, y+50-pos1);
        vertex(x, y+50-pos2);
        endShape(CLOSE);
      } else if (sides == 1) { // right
        beginShape();
        vertex(x+pos1, y);
        vertex(x+50, y);
        vertex(x+50, y+50);
        vertex(x+pos2, y+50);
        endShape(CLOSE);
      } else if (sides == 2) { // bottom
        beginShape();
        vertex(x, y+pos1);
        vertex(x+50, y+pos2);
        vertex(x+50, y+50);
        vertex(x, y+50);
        endShape(CLOSE);
      } else if (sides == 3) { // left
        beginShape();
        vertex(x, y);
        vertex(x+50-pos1, y);
        vertex(x+50-pos2, y+50);
        vertex(x, y+50);
        endShape(CLOSE);
      }
    }
  }
}

// Random Color Function for Testing
function randomColor() {
  let colors = ['#240041','#900048','#FF4057','#FF8260'];
  let pick = round(random(0, 3));
  return colors[pick];
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight/10);
}

function getResolution() {
  return [screen.width, screen.height];
}