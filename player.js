var playerID = 0;

var Player= (function(){
	function Player(id){
		var playerid = id;
		this.markId = function(){
			return playerid;
		};
	};
	return Player;
})();

//Testing environment
(function(){
	console.log("testing the player generation");
	var player1 = new Player(1);
	var player2 =  new Player(2);
	console.log(player1.markId() == 1);
	console.log(player2.markId() == 2);
}());

