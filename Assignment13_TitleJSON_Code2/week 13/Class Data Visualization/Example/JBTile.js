class JBTile extends Tile {
	processData(){
		this.lonelyYes = 0;
		this.lonelyNo = 0;

		this.lonelyAnswers = this.table.getColumn('How do you like your fries?');
		console.log(this.lonelyAnswers);


		for (let i = 0; i < this.lonelyAnswers; i++){
			if (this.lonelyAnswers[i]==='Yes'){
				this.lonelyYes++;
			}else{
				this.lonelyNo++;
			}
		}

		console.log(this.lonelyYes);
	}



  display() {
    noStroke();

    // call super class' display method so we get our
    // clean matrix and translation
    super.display();

    // console.log(this.table);
  }

}
