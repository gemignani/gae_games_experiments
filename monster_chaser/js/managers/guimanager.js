
function GUIManager(game){
	
	this.game = game;
}

GUIManager.prototype.setup = function(advance_stage){

	this.hud = new HUD(this.game);
	this.menuScreen = new MenuScreen(this.game);
	this.menuScreen.setAdvanceCallback(advance_stage);
	this.menuScreen.visible = false;

	// resolution scale change
	//game.stage.fullScreenScaleMode = Phaser.StageScaleMode.SHOW_ALL;
	//this.game.scale.maxWidth = this.game.width;
	//this.game.scale.maxHeight = this.game.height;
	//this.game.scale.setShowAll();
	//this.game.scale.refresh();

	// Debug stuff
	
	/*this.game.layer.debug = true;
	this.game.time.advancedTiming = true;
	this.fpsText = this.game.add.text(
		20, 20, '', { font: '16px Arial', fill: '#ffffff' }
	);*/ 
}

GUIManager.prototype.update = function(){

	this.hud.update();
	if(this.menuScreen.visible == true){
		this.menuScreen.update();	
	}

	if (this.game.time.fps !== 0) {
    	this.fpsText.setText(this.game.time.fps + ' FPS');
	}	
	
}

GUIManager.prototype.activateMenu = function(){

	this.menuScreen.visible = true;
}

GUIManager.prototype.advanceStage = function(){

	this.menuScreen.runAdvanceCallback();
}

GUIManager.prototype.destroy = function(){
	this.hud.destroy();
	
	//this.toolbar = { update: function(){} }
	this.hud = { update: function(){} }
}
