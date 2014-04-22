
MainGame.GameOverState = function(game){
	
};

MainGame.GameOverState.prototype = {
	
	create: function(){

		this.game = game;
		Phaser.Group.call(this, this.game, null, "hud");
		this.offsetX = 10;
		this.offsetY = 10;
		this.fixedToCamera = true;
		this.playerHealth = this.game.add.text(0, 0, "GAME OVER", { font: "18px monospace", fill: '#ffffff'}, this);

		this.game.add.existing(this);

	},

	update: function(){

	
	},

	render: function(){
		

		 
	}


};
