
MainGame.MainMenuState = function(game){
	
};

MainGame.MainMenuState.prototype = {
	
	create: function(){

		this.game.stage.backgroundColor = '#000000';

		//this.add.sprite(0, 0, 'background');
		var start_btn = new Phaser.Button(this.game, this.game.width / 2, this.game.height / 2, 'door', function(){
			this.game.state.start('Game');
		}, this, 1, 0, 0);

		start_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(start_btn);
		var text = "Objectives:\n Find the exit door and avoid all the ghosts!";
    	var style = { font: "25px Arial", fill: "#ff0044", align: "center" };
	    var t = game.add.text(game.world.centerX - 250, 10, text, style);


		/*var instructions_btn = new Phaser.Button(this.game, 1024/2, 680, 'instructions_btn', function(){
			console.log("instructions");
		}, this, 1, 0, 0);
		instructions_btn.anchor.setTo(0.5, 0.5);
		this.game.add.existing(instructions_btn);*/

		//this.game.menumusic = this.game.add.audio('game_music', .4, true);
		//this.game.menumusic.play('',0,0.4,true);

	},

	update: function(){
	
	}
};
