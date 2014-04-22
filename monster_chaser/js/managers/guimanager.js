
function GUIManager(game){
	
	this.game = game;
}

GUIManager.prototype.setup = function(){

	this.hud = new HUD(this.game);
	this.menuScreen = new MenuScreen(this.game);
	this.menuScreen.visible = false;
}

GUIManager.prototype.update = function(){

	this.hud.update();
	if(this.menuScreen.visible == true){
		this.menuScreen.update();	
	}
	
}

GUIManager.prototype.activateMenu = function(){

	this.menuScreen.visible = true;
}

GUIManager.prototype.destroy = function(){
	this.hud.destroy();
	
	//this.toolbar = { update: function(){} }
	this.hud = { update: function(){} }
}
