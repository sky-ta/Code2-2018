/////////////////////////////////////////////////////////////////////////
//Assignment 5: Game using simple states
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
//Code References: ????????????????????????????!!!!!!!!!!
//https://github.com/dongle/Code2_2018SP/tree/master/week02
//
/////////////////////////////////////////////////////////////////////////
//(x, y, length of rect, height of rect)
var widRect = 250;
var heiRect = 70;

let sceneStates = Object.freeze({ //Listing scenes which will appears in the "game"
	INTRO: 0,
	INSTRUCTION: 1,
	GAME: 2,
	OVER: 3,
});

let currentState = sceneStates.INTRO; //The first scene user sees is INTRO

let keyOn = false; //only true when you clicked
//???????????????

function setup(){
	createCanvas(800, 500);
}

function draw(){
	drawScene(currentState); //currentState is replaced with sceneStates.THESCENE
	checkTransition(currentState);
	keyOn = false;
}

//.........................................
function drawScene(whichScene){
	switch(whichScene){ //to switch between scenes when certain actions are taken
		case sceneStates.INTRO:
			background(0);
			fill(255);
			textSize(80);
			textAlign(CENTER, CENTER); //draw text from the center of the textbox
			text("CONNECT\n!!!QUICK!!!", width/2, height/2 - 50);

			//Textboxes: 
			//1-InStruction:
			fill(200,200,200); //????? Change color of boxes later pls
			rectMode(CENTER);
			rect(width/2,height/2 + 120, widRect, heiRect); 

			fill(255);
			textSize(30);
			text("Intruction", width/2, height/2 + 120);

			//2-PLAY:
			fill(200,200,200);
			rectMode(CENTER);
			rect(width/2,height/2 + 200, widRect, heiRect); 

			fill(255);
			textSize(30);
			text("PLAY", width/2, height/2 +200);

			
			break;

		case sceneStates.INSTRUCTION:
		//	if ()
			background(100 + sin(frameCount * 0.05) * 50, 100 + sin(frameCount * 0.06) * 50, 100 + sin(frameCount * 0.07) * 50);
			break;
		case sceneStates.GAME:
			background(0);
			break;
		case sceneStates.OVER:
			background(200, 200, 200);

	}
}

function checkTransition(whichScene){
	switch(whichScene){
		case sceneStates.INTRO:
			if(keyOn){
				if(mouseClicked && mouseX >=(width/2 - widRect/2) && mouseX <=(width/2 - widRect/2) && mouseY >= (height/2+120 - heiRect/2) && mouseY <= (height/2+120 + heiRect/2)){ 
				currentState++;
				setUpScene(currentState);
				}
			}
			break;
		case sceneStates.INSTRUCTION:
			if(keyOn){
				currentState++;
				setUpScene(currentState);
			}
			break;
		case sceneStates.GAME:
			if(keyOn){
				currentState++;
				setUpScene(currentState);
			}
			break;
		case sceneStates.OVER:
			if(keyOn){
				currentState++;
				setUpScene(currentState);
			}
			break;
		default:
			break;
	}
}

//...............................................
function setUpScene(whichScene){
	switch(whichScene){
		case sceneStates.INTRO:
			break;
		case sceneStates.INSTRUCTION:
			tutorialTimer = millis(); //how long it takes for the instruction
			break;
		case sceneStates.GAME:
			gameTimer = millis();
			break;
		case sceneStates.OVER:
			break;
		default:
			break;
	}
}

function mouseClicked(){
	keyOn = true;
}