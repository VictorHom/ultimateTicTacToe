var images = {1: "<span id='cross'>X</span>", 2: "<span id='circle'>O</span>"};
var playerTurn = 1;


function appendImageToDiv(divname){
	$(divname).append(images[playerTurn]);
	$(divname).unbind();
	return false;
};

function updatePlayerTurn(){
	if (playerTurn == 1){
		playerTurn = 2;
	}else{
		playerTurn = 1;
	}
};


