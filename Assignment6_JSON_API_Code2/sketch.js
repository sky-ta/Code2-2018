
var earthquakes;
var yMove = 0.0;
let loadButton;
function preload() {
  // Get the most recent earthquake in the database
  var url =
   'https://earthquake.usgs.gov/earthquakes/feed/v1.0/' +
    'summary/all_day.geojson';
  earthquakes = loadJSON(url);
}

function setup() {
  createCanvas(710, 400);
  /*createButton('save')
  .position(10, 10)
  .mousePressed();

  loadButton = createFileInput(loadPaint);
  loadButton.position(width-100, 10);*/
}

function draw() {
  background(200);
  // Get the magnitude and name of the earthquake out of the loaded JSON
  var earthquakeMag= earthquakes.features[0].properties.mag;
  fill(255);
  beginShape();
  var xMove = 0;  
  for (var x = 0; x <= width; x += 10) {
    var y = map(noise(xMove, yMove), 0, 1, 200,300);
    vertex(x, y); 
    xMove += earthquakes.features[0].properties.mag;
  }
  // increment y dimension for noise
  yMove += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}