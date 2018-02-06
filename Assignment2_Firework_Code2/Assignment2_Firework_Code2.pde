/////////////////////////////////////////////////////////////////////////
//Assignment 2: Firework Alteration
//
//In my Firework remix, I have made the following changes to the original file:
//1. Using an PImage to draw an image with the location indicated in FireworkParticle"
//instead of using ellipse
//2. Increasing numFireworks to create more particles (the screen is filled with denser amount of images)
//3. Changing the size of particle, velocity and acceleration so the images linger around longer on the screen
//4. Changing frameRate so that Processing file isn't significantly slowed down on laptop using
//
//Parsons School of Design
//Code 2 - Spring 2018
//https://portfolio.newschool.edu/skyta/
//
//Code References:
//https://github.com/dongle/Code2_2018SP/tree/master/week02
//
/////////////////////////////////////////////////////////////////////////
ArrayList<FireworkParticle> fireworkArray = new ArrayList<FireworkParticle>();
//ArrayList<ShibaImage> ShibaArray = new ArrayList<ShibaImage>();
PImage shiba; 

void setup() {
  size(1000, 1000);
  frameRate(30);
  
  shiba = loadImage("shiba.png");
  
  int numFireworks = 600;
  PVector position = new PVector(random(width/3.0, (2.0/3.0) * width), random(0, height/2));
  color randomColor = color(random(255), random(255), random(255));
  
  for (int i = 0; i < numFireworks; i++) {
    fireworkArray.add(new FireworkParticle(position, randomColor));
  }
}

void draw() {
  background(0);
  for (int i = 0; i < fireworkArray.size(); i++) {
    FireworkParticle firework = fireworkArray.get(i);
    firework.update();
    firework.draw();
  }
}