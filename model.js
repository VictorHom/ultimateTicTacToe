//Tests for a tictac toe game
(function(){
	// console.log("tictactoe object");
	// var game = new tictactoe();
	// console.log(game.checkForWin() == false );
	// console.log(game.model);
}());

function tictactoe(){
	//first three zeroes is the top row of the tic tac toe game
	//next three zeroes is the middle row
	this.model = [0,0,0,0,0,0,0,0,0];

	this.mark = function(modelspot, playermove){
		console.log("immeidtely after mark function " + this.model)
		if (this.assert(modelspot)){
			this.model[modelspot] = playermove;
		}else{
			console.log("there is an error with marking the tile spot");
		}
	};

	this.assert = function(modelspot){
		return modelspot < 9;
	};

	this.checkForWin = function(modelspot){
		if (this.rowWon()) {
			return true;
		} else if (this.colWon()){
			return true;
		} else if (this.diagWon()){
			return true;
		} else {
			return false;
		}
	};

	this.rowWon = function(){
		for (var i = 0; i< 9; i += 3){
			var firstInRow = this.model[i];
			var secondInRow = this.model[i+1];
			var thirdInRow = this.model[i+2];

			if (firstInRow != 0 && secondInRow != 0 && thirdInRow != 0){
				if (firstInRow == secondInRow && firstInRow == thirdInRow){
					return true;
				}
			}
		}
		return false;
	};

	this.colWon = function(){
		for (var i = 0; i < 3; i++){
			var firstInCol = this.model[i];
			var secondInCol = this.model[i + 3];
			var thirdInCol = this.model[i + 6];

			if (firstInCol != 0 && secondInCol != 0 && thirdInCol != 0){
				if (firstInCol == secondInCol && firstInCol == thirdInCol){
					return true;
				}
			}
		}
		return false;
	};

	this.diagWon = function(){
		var center = this.model[4];
		if (center != 0 && this.model[0] != 0 && this.model[8] != 0){
			if (center == this.model[0] && center == this.model[8]){
				return true;
			}
		}

		if (center != 0 && this.model[2] != 0 && this.model[6] != 0){
			if (center == this.model[2] && center == this.model[6]){
				return true;
			}
		}
		return false;
	}
};
