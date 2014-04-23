
function HUD(game){
	
	this.game = game;
	Phaser.Group.call(this, this.game, null, "hud");
	this.offsetX = 10;
	this.offsetY = 10;
	this.fixedToCamera = true;
	this.playerHealth = this.game.add.text(0, 0, "Health: 100%", { font: "18px monospace", fill: '#ffffff'}, this);

	this.game.add.existing(this);
}

HUD.prototype = Object.create(Phaser.Group.prototype);
HUD.prototype.constructor = HUD;

HUD.prototype.update = function(){

	//get player health
	var pH = Math.floor(( this.game.player.health / this.game.player.maxHealth ) * 100);
	this.playerHealth.setText("Health: " + pH + "%");
	
}