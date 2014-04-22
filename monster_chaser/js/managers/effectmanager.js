
function EffectManager(game){

	this.game = game;


}

EffectManager.prototype.setup = function(){

	this.shadowTexture = this.game.add.bitmapData(this.game.width * 2, this.game.height * 2);
	var lightSprite = this.game.add.image(0, 0, this.shadowTexture);
	lightSprite.blendMode = Phaser.blendModes.MULTIPLY;

}

EffectManager.prototype.update = function(target){

    this.shadowTexture.context.fillStyle = 'rgb(0, 0, 0)';
	this.shadowTexture.context.fillRect(0, 0, this.game.width * 2, this.game.height * 2);
	this.shadowTexture.context.beginPath();    	
	this.shadowTexture.context.fillStyle = 'rgb(255, 255, 255)';
	
	this.shadowTexture.context.arc(target.x, target.y, this.LIGHT_RADIUS, 0, Math.PI*2);
	this.shadowTexture.context.fill();
	this.shadowTexture.dirty = true;
}
