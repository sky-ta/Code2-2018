class Ball {
  float xBall;
  float yBall;
  float ballSize = 50;
  float xballSpeed = 9;
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
    fill(115);
    ellipseMode(CENTER);
    ellipse(xBall, yBall, ballSize, ballSize);
  }

  void update() {
    xBall += xballSpeed;
    if (xBall < 0 || xBall > width) {
      if (xBall < 0 + ballSize/2) {
        p2Score++;
      }
      if (xBall > width) {
        p1Score++;
      }

      xBall = width/2 + r;
      yBall = height/2;
      xballSpeed = -xballSpeed;  //set a random velocity
      //yballSpeed = random(-3, 3);

      ////BALL - Draw ball:
      //xBall = xBall + xballSpeed;
      //yBall = yBall + yballSpeed;
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