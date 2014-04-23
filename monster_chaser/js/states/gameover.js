
MainGame.GameOverState = function(game){
	
};

MainGame.GameOverState.prototype = {
	
	create: function(){

		var text = "Game Over!\nThanks for playing! :)\nCredits:\n\n";
    	var style = { font: "25px Arial", fill: "#ff0044", align: "center" };
	    var t = game.add.text(game.world.centerX - 250, 10, text, style);

	},

	update: function(){

	
	},

	render: function(){
		

		 
	}


};
