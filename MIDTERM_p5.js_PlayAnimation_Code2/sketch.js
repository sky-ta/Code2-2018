//Creating animations

//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
var begula;
var crab;
var octopus;
var starfish;
var ray;


function setup() {
  createCanvas(900, 500);  

  // document.bgColor="#CCCCCC"
  //BEGULA:
  begula = createSprite(220, 100);
  begula.addAnimation("normal","assets/begula01.png", "assets/begula03.png");
  begula.addAnimation("annoyed","assets/begula-angry01.png", "assets/begula-angry03.png");

  begula.mouseActive = true;
  begula.setCollider("circle", 0,0,64);

  //CRAB:
  crab = createSprite(600, 200);
  crab.addAnimation("normal","assets/crab01.png", "assets/crab03.png");
  crab.addAnimation("annoyed","assets/crab-angry01.png", "assets/crab-angry03.png");

  crab.mouseActive = true;
  crab.setCollider("circle", 0,0,64);
	
  //OCTOPUS:
  octopus = createSprite(710, 150);
  octopus.addAnimation("normal","assets/octopus01.png", "assets/octopus03.png");
  octopus.addAnimation("annoyed","assets/octopus-angry01.png", "assets/octopus-angry03.png");

  octopus.mouseActive = true;
  octopus.setCollider("circle", 0,0,80);

  //STARFISH:
  starfish = createSprite(400, 150);
  starfish.addAnimation("normal","assets/starfishs01.png", "assets/starfish03.png");
  starfish.addAnimation("annoyed","assets/starfish-angry01.png", "assets/starfish-angry03.png");

  starfish.mouseActive = true;
  starfish.setCollider("circle", 0,0,80);

  //RAY:
  ray = createSprite(450, 250);
  ray.addAnimation("normal","assets/ray01.png", "assets/ray03.png");
  ray.addAnimation("annoyed","assets/ray-angry01.png", "assets/ray-angry03.png");

  ray.mouseActive = true;
  ray.setCollider("circle", 0,0,69);


  //FUNCTIONS FOR ANIMATION:
  begula.onMouseOver = function() {
  this.changeAnimation("annoyed");
  }
  begula.onMouseOut = function() {
  this.changeAnimation("normal");
  }
	
	crab.onMouseOver = function() {
  this.changeAnimation("annoyed");
  }
  crab.onMouseOut = function() {
  this.changeAnimation("normal");
  }  

  octopus.onMouseOver = function() {
  this.changeAnimation("annoyed");
  }
  octopus.onMouseOut = function() {
  this.changeAnimation("normal");
  }

  starfish.onMouseOver = function() {
  this.changeAnimation("annoyed");
  }
  starfish.onMouseOut = function() {
  this.changeAnimation("normal");
  }  

  ray.onMouseOver = function() {
  this.changeAnimation("annoyed");
  }
  ray.onMouseOut = function() {
  this.changeAnimation("normal");
  }  
  
  // begula.onMousePressed = function() {
  // this.changeAnimation("annoyed");
  // this.animation.goToFrame(this.animation.getLastFrame());
  // }
  
  // begula.onMouseReleased = function() {
  // this.changeAnimation("annoyed");
  // this.animation.goToFrame(0);
  // }
  
}

function draw() {
  background(255,255,255);  
  if(begula.mouseIsOver)
      begula.rotation-= 10;
  // begula.visible = !begula.mouseIsPressed;
  
  if(crab.mouseIsOver)
      crab.rotation-= 10;

  if(octopus.mouseIsOver)
      octopus.rotation-= 10;

  if(starfish.mouseIsOver)
      starfish.rotation-= 10;

  if(ray.mouseIsOver)
      ray.rotation-= 10;
  drawSprites();
}