class Ball {
  float xBall;
  float yBall;
  float ballSize = 50;
  float xballSpeed = 8;
  float yballSpeed = 5;
  float r;

  Ball() { //similar to setup
    //BALL:
    r = random(-100, +100);
    xBall = width/2 + r;
    yBall = height/2;
  }

  void display() {
    noStroke();
    fill(R-10, G+4, B-8);
    ellipseMode(CENTER);
    ellipse(xBall, yBall, ballSize, ballSize);
  }

  void update() {
    xBall += xballSpeed;

    if (xBall < 0 || xBall > width) {
      if (xBall < 0 + ballSize/2) {
        p2Score++;
        if (p2Score%1 == 0) {
          flashColor(); //change background color everytime ball hit the wall
        }
      }
      if (xBall > width) {
        p1Score++;
        if (p1Score%1 == 0) {
          flashColor();
        }
      }

      xBall = width/2 + r;
      yBall = height/2;
      xballSpeed = -xballSpeed;  

    }

    if (yBall < 0 || yBall > height ) {
      yballSpeed *= -1;
      yBall += yballSpeed;
    } else {
      yBall += yballSpeed;
    }
  }

  void paddleCollision(Paddle padd) {
    if (xBall > padd.xPaddle && xBall < padd.xPaddle + padd.paddleSizeX) {
      if (yBall > padd.yPaddle && yBall < padd.yPaddle + padd.paddleSizeY) {
        xballSpeed = -xballSpeed;
        yballSpeed = yballSpeed + random(-3, 3);
      }
    }
  }
}