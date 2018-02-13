// Where is the circle
var img1, img2;
var x, y;

function preload(){
  img1 = loadImage('assets/cat-normal.jpg');
  img2 = loadImage('assets/cat-hissing.jpg');
}

function setup() {
  createCanvas(800, 800);
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw() {
  background(200);

  if (mouseIsPressed = false){
  image(img1, x, y);
} else if (mouseIsPressed = true){
    image(img2, x, y);

}
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}

