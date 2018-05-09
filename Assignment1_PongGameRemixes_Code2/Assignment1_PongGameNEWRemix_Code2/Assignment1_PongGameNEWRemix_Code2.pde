int p1Score;
int p2Score;
boolean up1 = false;
boolean up2 = false;
boolean down1 = false;
boolean down2 = false;
float R = 200, B = 200, G = 200;

Ball ball;
Paddle paddle1;
Paddle paddle2;


void setup() {
  size (900, 900);
  background(0);

  ball = new Ball();
  paddle1 = new Paddle(0);
  paddle2 = new Paddle(1);
}

void draw() {
  background (R, G, B);
  //fill(R, G, B);
  //rect(0, 0, width, height);
  //middle line:
  for (int i = 0; i <= height; i += 10) {
    stroke(255);
    line (width/2, i, width/2, i);
  }

  //COLLISION:
  ball.paddleCollision(paddle1);
  ball.paddleCollision(paddle2);

  //UPDATES AND DISPLAYS:
  ball.update();
  ball.display();
  paddle1.update();
  paddle1.display();
  paddle2.update();
  paddle2.display();

  //SCORES:
  textSize(36);
  fill(255);
  textAlign(CENTER, CENTER);
  text(p1Score, width/2 - 100, 50);
  text(p2Score, width/2 + 100, 50);
}


void keyPressed() {
  if (key == 'w' || key == 'W' || key == 's' || key == 'S') {
    if (key == 'w' || key == 'W') {
      up1 = true;
    }
    if (key == 's' || key == 'S') {
      down1 = true;
    }
  } else if (key == CODED) {
    if (keyCode == UP) {
      up2 = true;
    }    
    if (keyCode == DOWN) {
      down2 = true;
    }
  }
}

void keyReleased() {
  if (key == 'w' || key == 'W' || key == 's' || key == 'S') {
    if (key == 'w' || key == 'W') {
      up1 = false;
    }
    if (key == 's' || key == 'S') {
      down1 = false;
    }
  } else if (key == CODED) {
    if (keyCode == UP) {
      up2 = false;
    }    
    if (keyCode == DOWN) {
      down2 = false;
    }
  }
}

void flashColor() {
  if (R < 255 && G <255 && B <255) {
    R = random(10,255);
    G = random(10,255);
    B = random(10,255);
  }
}