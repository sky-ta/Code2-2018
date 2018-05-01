class SkyTile extends Tile {
	processData(){

		console.log(this.table.getColumn('How do you like your fries?'));
		let answers = this.table.getColumn('How do you like your fries?');
		this.FriesAnswers = [];
		for(var i =0; i<14;i++){
			this.FriesAnswers.push(answers[i]);
		}
		this.shapeCurly= 0;
		this.shapeStraight= 0;
		this.salt= 0;
		this.sauceWith= 0;
		this.sauceWithout= 0;
		
		
		for(let i =0; i<=15; i++){
			if (this.FriesAnswers[i] === 'Curly'){
				this.shapeCurly++;
				// console.log("Curly: "+this.shapeCurly);
			}
			if (this.FriesAnswers[i] ==='Straight'){
				this.shapeStraight++;
				// console.log("Straight: " + this.shapeStraight);
			}
			if (this.FriesAnswers[i] ==='Salty'){
				this.salt++;
				// console.log("Salt: " + this.salt);
			}
			if (this.FriesAnswers[i] ==='With sauce'){
				this.sauceWith++;
				console.log("Sauce: " + this.sauceWith);
			}
			if (this.FriesAnswers[i] ==='Without sauce'){
				this.sauceWithout++;
			}
		}
	}


	//Bellow is Rian's EXAMPLE
		// processData(){
		// 		console.log(this.table.getColumn('What is your favorite ice cream flavor?'));
		// 		let answers = this.table.getColumn('What is your favorite ice cream flavor?');
		// 		this.flavors =  [];
		// 		this.icecream = [];
		// 		for(var i =0; i<14;i++){
		// 			this.flavors.push(answers[i]);
		// 			this.icecream.push(new IceCream(this.flavors[i], this.tileSize));
		// 		}
		// 	}
	// Bellow is Jonathan's EXAMPLE (only work with binary0:
		// this.lonelyYes = 0;
		// this.lonelyNo = 0;

		// this.lonelyAnswers = this.table.getColumn('How do you like your fries?');
		// console.log(this.lonelyAnswers);


		// for (let i = 0; i < this.lonelyAnswers; i++){
		// 	if (this.lonelyAnswers[i]==='Yes'){
		// 		this.lonelyYes++;
		// // 	}else{
		// // 		this.lonelyNo++;
		// 	}
		// }

		// console.log(this.lonelyYes);
	// End of EXAMPLE.

	



  display() {
    noStroke();

    // call super class' display method so we get our
    // clean matrix and translation
    super.display();
    console.log("width " + width);
    //BACKGROUND ELEMENTS:
    //Fabric Grid:
    for (let i=0; i<= width; i=i+30){
    	fill(252, 58, 58);
    	rect(i-3, 0, 5, height);
    	rect(0, i-6, width, 5);
    }

    //Dish:
    fill(249, 251, 255);
    ellipse(width/2, height/2, width*7/8, height*7/8);
    fill(234, 235, 237);
    ellipse(width/2, height/2, width*5/8, height*5/8);
    fill(244, 245, 247)
    ellipse(width/2, height/2, width*5/8 -10, height*5/8 -10);

    //CURLY FRIES:
    for (let i = 0; i<this.shapeCurly;i++){
    	var w = parseInt(random(70,350)); //keep the desmol number to whole.
    	var h = parseInt(random(70,350)); 
    	var colorRandom = parseInt(random(210, 255));
    	//console.log(w,h);
    	noFill();
    	stroke(colorRandom+5, colorRandom, 0);
    	strokeWeight(25);
    	arc(w, h, 180, 100, radians(random(70, 90)), radians(random(150, 250)));

    	// line(w,h,w+parseInt(random(-50,-200)),h+parseInt(random(-50,-200)));
    }

    //STRAIGHT FRIES:
    for (let i = 0; i<this.shapeStraight; i++){
    	var w = parseInt(random(20,380)); //keep the desmol number to whole.
    	var h = parseInt(random(20, 380)); 
    	console.log(w,h);
    	stroke(255,204,0);
    	strokeWeight(30);
    	if (w <width/2){
    		var ranX = parseInt(random(0,200));
    	}else{
    		var ranX = parseInt(random(0,-200));	
    	}
    	
    	if (h<height/2){
    		var ranY = parseInt(random(0,200));
    	}else{
    		var ranY = parseInt(random(0,-200));	
    	}
    	line(w, h, w +ranX, h +ranY);
    }

    //SALT:
    //10 grains of salt for any option
    for (let i =0; i <this.salt*10; i++){
    	var w = parseInt(random(70,350)); //keep the desmol number to whole.
    	var h = parseInt(random(70,350)); 
    	var colorRandom = parseInt(random(248, 252));
    	//console.log(w,h);
    	noStroke();
    	fill(colorRandom+3, colorRandom, colorRandom+2);
    	rect(w, h, 5, 5);
    }

    //SAUCEWITHOUT:
    for (let i =0; i <this.sauceWithout; i++){
    	var w = parseInt(random(70,350));
    	var h = parseInt(random(70,350));
    	//package:
    	fill(234, 230, 239);
    	rect(w -3, h -3, 56, 96);
    	fill(248, 244, 252);
    	rect(w, h, 50, 90); 
    	fill(193, 13, 52);
    	rect(w +5, h +30, 40, 50);

    	//text:
    	var packText = 'tear hear';
    	fill (0);
    	textSize(7);
    	text(packText, w +5, h +7);
    	var packDash = '_ _ _ _ _ _';
    	fill (0);
    	textSize(5);
    	text(packDash, w, h +7);

    	//tomato:

    	fill(247, 61, 105);
    	ellipse(w +25, h +60, 25, 20);
    	fill(58, 122, 58);
    	triangle(w +25, h +50, w+30, h+55, w+10, h+55);
    }


    //SAUCEWITH:
    for (let i =0; i <this.sauceWith; i++){
    	var w = parseInt(random(70,350));
    	var h = parseInt(random(70,350));
    	//package:
    	fill(234, 230, 239);
    	rect(w -3, h, 56, 83);
    	fill(248, 244, 252);
    	rect(w, h, 50, 80); 
    	fill(193, 13, 52);
    	rect(w +5, h +20, 40, 50);

    	//text:
    	var packDash = '_ _ _ _ _ _';
    	fill (0);
    	textSize(5);
    	text(packDash, w, h);

    	//tomato:
    	fill(247, 61, 105);
    	ellipse(w +25, h +50, 25, 20);
    	fill(58, 122, 58);
    	var difference = 10;
    	triangle(w +25, h +50 -difference, w+30, h+55 -difference, w+10, h+55 - difference);

    }


    // rect(30, 20, 55, 55, 20, 15, 10, 5);

    // console.log(this.table);
  }

}
