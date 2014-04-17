
function MenuScreen(game){
	
	this.game = game;
	Phaser.Group.call(this, this.game, null, "menuScreen");

		/*
	//this.nextWave = WaveManager.currentWave;
	//this.availablePoints = InventoryManager.points;

	//overlay
	this.overlay = this.create(0, 0, 'overlay');
	//this.overlay.anchor.setTo(0.5, 0.5);
	this.overlay.fixedToScreen = true;
	
	this.waveCompleteText = this.game.add.text(50, 150, "Wave Complete!", { font: "48px monospace", fill: '#ffffff'}, this);
	this.waveTimeText = this.game.add.text(50, 220, "Time: 0", { font: "24px monospace", fill: '#ffffff'}, this);
	//this.enemiesKillText = this.game.add.text(50, 260, "Enemies Killed: 0", { font: "24px monospace", fill: '#ffffff'}, this);
	this.accuracyText = this.game.add.text(50, 270, "Accuracy: 0", { font: "24px monospace", fill: '#ffffff'}, this);


	this.pointsText = this.game.add.text(640, 80, "Points Available: " + this.availablePoints, { font: "22px monospace", fill: '#ffffff'}, this);
	//
	//this.ready_btn = this.create(645, 640, 'ready_btn');
	this.ready_btn = new Phaser.Button(this.game, 645, 640, 'ready_btn', this.readyWave, this, 1, 0, 0);
	this.add(this.ready_btn);*/

}

MenuScreen.prototype = Object.create(Phaser.Group.prototype);
MenuScreen.prototype.constructor = MenuScreen;


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

