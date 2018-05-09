class Paddle {
  float xPaddle;
  float yPaddle;
  //float paddleSpeed = 4;
  float paddleSizeX = 30;
  float paddleSizeY = 200;
  int player;

  Paddle(int thePlayer) {
    //Set Sides of Players:
    player = thePlayer;
    if (thePlayer == 0) {
      xPaddle = 30;
      yPaddle = height/2;
    } else if (thePlayer == 1) {
      xPaddle = width-30-paddleSizeX;
      yPaddle = height/2;
    }
  }

  void update() {
    if (player == 0) {
      if (up1 && yPaddle > 0) {
        yPaddle -=10;
      } 
      if (down1 && yPaddle < height - paddleSizeY) {
        yPaddle +=10;
      }
    }
    if (player == 1) {
      if (up2 && yPaddle > 0) {
        yPaddle -=10;
      } 
      if (down2 && yPaddle < height - paddleSizeY) {
        yPaddle +=10;
      }
    }
  }

  void display() {
    rectMode(CORNER);
    fill(255);
    rect(xPaddle, yPaddle, paddleSizeX, paddleSizeY);
  }
  float getY() {
    return yPaddle;
  }
}




  //PADDLE 1:
  //xPaddle1 = width - paddleSizeX;
  //yPaddle1 = height/2 - paddleSizeY/2;


  //void Paddle1() {
  //  //PADDLE 1:
  //  rectMode(CENTER);
  //  rect(xPaddle, yPaddle, paddleSizeX, paddleSizeY);
  //  if (up1 == false) {
  //    paddleSpeed = 0;
  //  } else if (up1 == true) {
  //    paddleSpeed = +paddleSpeed;
  //  }
  //  if (down1 == true) {
  //    paddleSpeed = +paddleSpeed;
  //  }

  //  yPaddle = yPaddle + paddleSpeed;
  //}