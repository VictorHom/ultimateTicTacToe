function generateGame(){
	for (var i = 0; i < 9; i++){
		$("#game0").append("<div class='tttbox '"+ "id='" + "square" + i + "' >" + "</div>");
		$("#game1").append("<div class='tttbox '"+ "id='" + "square" + i + "' >" + "</div>");
		$("#game2").append("<div class='tttbox '"+ "id='" + "square" + i + "' >" + "</div>");
		$("#game3").append("<div class='tttbox '"+ "id='" + "square" + i + "' >" + "</div>");
		$("#game4").append("<div class='tttbox '"+ "id='" + "square" + i + "' >" + "</div>");
		$("#game5").append("<div class='tttbox '"+ "id='" + "square" + i + "' >" + "</div>");
		$("#game6").append("<div class='tttbox '"+ "id='" + "square" + i + "' >" + "</div>");
		$("#game7").append("<div class='tttbox '"+ "id='" + "square" + i + "' >" + "</div>");
		$("#game8").append("<div class='tttbox '"+ "id='" + "square" + i + "' >" + "</div>");
	}
	$("#playerturn").text("PlayerX");
	//$("#game0").addClass("onthisgame");
	$("#game4" + " .tttbox").css("background","#1B7FE8");
}

function generateButtons(){
	$("#gamehelp").append("<button id ='restartbutton' type='button'>New</button>");
	initiateRestart();
}

function initiateRestart(){
	$("#gamehelp").on("click", "button", function(){
		$("#largeboard").remove();
		$("#container").append("<div id='largeboard'></div>");
		for (var i = 0; i < 9; i++){
			$("#largeboard").append("<div class = 'game'>"+ "<span class = 'gamenumber'>" +  (i+1) + "</span>"+ "<div id='game"+ i + "' class = 'minigameSeparator'></div></div>");	
		}
		$("#restartbutton").remove();
    	run();
	});
}

function moveBorder(oldbordernum, newbordernum, flag){
	if (flag == -1){
		for (var i = 0; i < 9; i++){
			if (i != newbordernum ){
				$("#game"+ i + " .tttbox").css("background","#1B7FE8");
			}
		}

	}else{
		$('html, body').animate({
		    scrollTop: $("#game"+ newbordernum).offset().top
		}, 1000);
		for (var i = 0; i < 9; i++){
			if (i != newbordernum){
				$("#game"+ i + " .tttbox").css("background","#ffa863");
			}
		}
		$("#game"+ newbordernum+ " .tttbox").css("background","#1B7FE8");
	}
}

function updateWinGameScreen(gameNumber){
	$("#game" + gameNumber).children().each(function () {
		$(this).css("background","#9d70ff");
	});
}

function addWinPopup(){
	$.magnificPopup.open({
	    items: {
	        src: '<div id="test-modal" class="white-popup"><h1>' + $("#playerturn").text() + ' is the winner </h1></div>',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in'
	    }
	});


}

function updatePlayerTurnText(){
	if ($("#playerturn").text() == "PlayerO"){
		$("#playerturn").text("PlayerX");
	}else{
		$("#playerturn").text("PlayerO");
	}
}

function colorWonGamesAsUnavailable(wonGamesArray){
	if (!jQuery.isEmptyObject(wonGamesArray)){
		for (var i = 0; i < wonGamesArray.length; i++){
			updateWinGameScreen(wonGamesArray[i]);
		}
	}
}
