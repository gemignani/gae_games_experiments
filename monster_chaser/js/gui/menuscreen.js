
function MenuScreen(game){
	
	this.game = game;
	Phaser.Group.call(this, this.game, null, "menuScreen");

	this.offsetX = 10;
	this.offsetY = 10;
	this.fixedToCamera = true;
	this.teste = this.game.add.text(0, 50, "Stage Not Completed!", { font: "18px monospace", fill: '#ffffff'}, this);

	this.game.add.existing(this);


}

MenuScreen.prototype = Object.create(Phaser.Group.prototype);
MenuScreen.prototype.constructor = MenuScreen;

MenuScreen.prototype.setAdvanceCallback = function(callback){
	this.advance_stage = callback;
}

MenuScreen.prototype.runAdvanceCallback = function(){
	this.teste.setText("Stage Completed!");
	this.advance_stage();
}

MenuScreen.prototype.update = function(){


/*
	this.waveTimeText.setText("Time: " + Math.floor(WaveManager.waveLength / 1000) + " seconds");
	//this.enemiesKillText.setText("Enemies Killed: " + WaveManager.enemiesKilled);
	this.accuracyText.setText("Accuracy: " + WaveManager.accuracy + "%");

	this.t1_text.setText(InventoryManager.inventory[2].amount.toString());
	this.t2_text.setText(InventoryManager.inventory[3].amount.toString());
	this.h_text.setText(InventoryManager.inventory[1].amount.toString());
	this.pointsText.setText("Points Available: " + InventoryManager.points);*/
}

