$(document).ready(function(){
	run();
});

function run(){
	//generate game. src is view.js
	generateGame();
	generateButtons();
	var largeboard_game = new tictactoe();
	var game_0 = new tictactoe();
	var game_1 = new tictactoe();	
	var game_2 = new tictactoe();
	var game_3 = new tictactoe();
	var game_4 = new tictactoe();
	var game_5 = new tictactoe();
	var game_6 = new tictactoe();
	var game_7 = new tictactoe();
	var game_8 = new tictactoe();
	var player1Constant = 1;
	var player2Constant = 2;
	var player1 = new Player(player1Constant);
	var player2 =  new Player(player2Constant);
	var currentboard = 4;
	//playerTurn is in useraction

	//the method appendImageToDiv(), returnPlayerTurnAndUpdate(), and the player turn var are in useraction.js
	$("#game0").bind('click', function(e){
		if ((currentboard == 0 || currentboard == -1) && largeboard_game.model[0] == 0){
			appendImageToDiv( "#game0 " + "#square"+ e.target.id.substring(e.target.id.length-1)); 
			game_0.mark(parseInt(e.target.id.substring(e.target.id.length-1)), playerTurn);
			if (game_0.checkForWin()){
				largeboard_game.mark(0, playerTurn);
				updateWinGameScreen(0);
				if (largeboard_game.checkForWin()){
					addWinPopup();
				}
			}
			currentboard = getBoardPlacementPos(parseInt(e.target.id.substring(e.target.id.length-1)));
			moveBorder(0,parseInt(e.target.id.substring(e.target.id.length-1)),currentboard);
			var wonGames = checkForWonGames();
			colorWonGamesAsUnavailable(wonGames);
			updatePlayerTurn();
			updatePlayerTurnText();
		}
	});
	$("#game1").bind('click', function(e){
		if ((currentboard == 1 || currentboard == -1) && largeboard_game.model[1] == 0){
			appendImageToDiv( "#game1 " + "#square"+ e.target.id.substring(e.target.id.length-1));
			game_1.mark(parseInt(e.target.id.substring(e.target.id.length-1)), playerTurn);
			console.log("game1 " + game_1.model);
			if (game_1.checkForWin()){
				largeboard_game.mark(1, playerTurn);
				updateWinGameScreen(1);
				if (largeboard_game.checkForWin()){
					addWinPopup();
				}
			}
			currentboard = getBoardPlacementPos(parseInt(e.target.id.substring(e.target.id.length-1)));
			moveBorder(1,parseInt(e.target.id.substring(e.target.id.length-1)),currentboard);
			var wonGames = checkForWonGames();
			colorWonGamesAsUnavailable(wonGames);
			updatePlayerTurn();
			updatePlayerTurnText();
		}
	});
	$("#game2").bind('click', function(e){
		if ((currentboard == 2 || currentboard == -1) && largeboard_game.model[2] == 0){
			appendImageToDiv( "#game2 " + "#square"+ e.target.id.substring(e.target.id.length-1)); 
			game_2.mark(parseInt(e.target.id.substring(e.target.id.length-1)), playerTurn);
			console.log("game2 " + game_2.model);
			if (game_2.checkForWin()){
				largeboard_game.mark(2, playerTurn);
				updateWinGameScreen(2);
				if (largeboard_game.checkForWin()){
					addWinPopup();
				}
			}
			currentboard = getBoardPlacementPos(parseInt(e.target.id.substring(e.target.id.length-1)));
			moveBorder(2,parseInt(e.target.id.substring(e.target.id.length-1)),currentboard);
			var wonGames = checkForWonGames();
			colorWonGamesAsUnavailable(wonGames);
			updatePlayerTurn();
			updatePlayerTurnText();
		}
	});
	$("#game3").bind('click', function(e){
		if ((currentboard == 3 || currentboard == -1) && largeboard_game.model[3] == 0){
			appendImageToDiv( "#game3 " + "#square"+ e.target.id.substring(e.target.id.length-1));
			game_3.mark(parseInt(e.target.id.substring(e.target.id.length-1)), playerTurn); 
			console.log("game3 " + game_3.model);
			if (game_3.checkForWin()){
				largeboard_game.mark(3, playerTurn);
				updateWinGameScreen(3);
				if (largeboard_game.checkForWin()){
					addWinPopup();
				}
			}
			currentboard = getBoardPlacementPos(parseInt(e.target.id.substring(e.target.id.length-1)));
			moveBorder(3,parseInt(e.target.id.substring(e.target.id.length-1)),currentboard);
			var wonGames = checkForWonGames();
			colorWonGamesAsUnavailable(wonGames);
			updatePlayerTurn();
			updatePlayerTurnText();
		}
	});
	$("#game4").bind('click', function(e){
		if ((currentboard == 4 || currentboard == -1) && largeboard_game.model[4] == 0){
			appendImageToDiv( "#game4 " + "#square"+ e.target.id.substring(e.target.id.length-1));
			game_4.mark(parseInt(e.target.id.substring(e.target.id.length-1)), playerTurn);
			console.log("game4 " + game_4.model);
			if (game_4.checkForWin()){
				largeboard_game.mark(4, playerTurn);
				updateWinGameScreen(4);
				if (largeboard_game.checkForWin()){
					addWinPopup();
				}
			}
			currentboard = getBoardPlacementPos(parseInt(e.target.id.substring(e.target.id.length-1)));
			moveBorder(4,parseInt(e.target.id.substring(e.target.id.length-1)),currentboard);
			var wonGames = checkForWonGames();
			colorWonGamesAsUnavailable(wonGames);
			updatePlayerTurn();
			updatePlayerTurnText();
		}
	});
	$("#game5").bind('click', function(e){
		if ((currentboard == 5 || currentboard == -1) && largeboard_game.model[5] == 0){
			appendImageToDiv( "#game5 " + "#square"+ e.target.id.substring(e.target.id.length-1)); 
			game_5.mark(parseInt(e.target.id.substring(e.target.id.length-1)), playerTurn);
			console.log("game5 " + game_5.model); 
			if (game_5.checkForWin()){
				largeboard_game.mark(5, playerTurn);
				updateWinGameScreen(5);
				if (largeboard_game.checkForWin()){
					addWinPopup();
				}
			}
			currentboard = getBoardPlacementPos(parseInt(e.target.id.substring(e.target.id.length-1)));
			moveBorder(5,parseInt(e.target.id.substring(e.target.id.length-1)),currentboard);
			var wonGames = checkForWonGames();
			colorWonGamesAsUnavailable(wonGames);
			updatePlayerTurn();
			updatePlayerTurnText();
		}
	});
	$("#game6").bind('click', function(e){
		if ((currentboard == 6 || currentboard == -1) && largeboard_game.model[6] == 0){
			appendImageToDiv( "#game6 " + "#square"+ e.target.id.substring(e.target.id.length-1));
			game_6.mark(parseInt(e.target.id.substring(e.target.id.length-1)), playerTurn);
			console.log("game6 " + game_6.model);
			if (game_6.checkForWin()){
				largeboard_game.mark(6, playerTurn);
				updateWinGameScreen(6);
				if (largeboard_game.checkForWin()){
					addWinPopup();
				}
			}
			currentboard = getBoardPlacementPos(parseInt(e.target.id.substring(e.target.id.length-1)));
			moveBorder(6,parseInt(e.target.id.substring(e.target.id.length-1)),currentboard);
			var wonGames = checkForWonGames();
			colorWonGamesAsUnavailable(wonGames);
			updatePlayerTurn();
			updatePlayerTurnText();
		}
	});
	$("#game7").bind('click', function(e){
		if ((currentboard == 7 || currentboard == -1) && largeboard_game.model[7] == 0){
			appendImageToDiv( "#game7 " + "#square"+ e.target.id.substring(e.target.id.length-1));
			game_7.mark(parseInt(e.target.id.substring(e.target.id.length-1)), playerTurn);
			console.log("game7 " + game_7.model);
			if (game_7.checkForWin()){
				largeboard_game.mark(7, playerTurn);
				updateWinGameScreen(7);
				if (largeboard_game.checkForWin()){
					addWinPopup();
				}
			}
			currentboard = getBoardPlacementPos(parseInt(e.target.id.substring(e.target.id.length-1)));
			moveBorder(7,parseInt(e.target.id.substring(e.target.id.length-1)),currentboard);
			var wonGames = checkForWonGames();
			colorWonGamesAsUnavailable(wonGames);
			updatePlayerTurn();
			updatePlayerTurnText();
		}
	});
	$("#game8").bind('click', function(e){
		if ((currentboard == 8 || currentboard == -1) && largeboard_game.model[8] == 0){
			appendImageToDiv( "#game8 " + "#square"+ e.target.id.substring(e.target.id.length-1));
			game_8.mark(parseInt(e.target.id.substring(e.target.id.length-1)), playerTurn); 
			console.log("game8 " + game_8.model);
			if (game_8.checkForWin()){
				largeboard_game.mark(8, playerTurn);
				updateWinGameScreen(8);
				if (largeboard_game.checkForWin()){
					addWinPopup();
				}
			}
			currentboard = getBoardPlacementPos(parseInt(e.target.id.substring(e.target.id.length-1)));
			moveBorder(8,parseInt(e.target.id.substring(e.target.id.length-1)),currentboard);
			var wonGames = checkForWonGames();
			colorWonGamesAsUnavailable(wonGames);
			updatePlayerTurn();
			updatePlayerTurnText();
		}
	});	

	function getBoardPlacementPos(gameNumber){
		if (largeboard_game.model[gameNumber] != 0){
			return -1;
		}else{
			return gameNumber;
		}
	}

	function checkForWonGames(){
		var arrayofWonGames = [];
		for (var i = 0; i < largeboard_game.model.length; i++){
			if (largeboard_game.model[i] != 0){
				arrayofWonGames.push(i);
			}
		}
		return arrayofWonGames;
	}
}

