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
      yPaddle = height/2-paddleSizeY/2;
    } else if (thePlayer == 1) {
      xPaddle = width-30-paddleSizeX;
      yPaddle = height/2-paddleSizeY/2;
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
    //Make the color and transparency of the paddles randomize:
    fill(R*random(0.5, 1), G*random(0.5, 1), B*random(0.5, 1), R);
    //fill(255);
    rect(xPaddle, yPaddle, paddleSizeX, paddleSizeY);
  }
  float getY() {
    return yPaddle;
  }
}