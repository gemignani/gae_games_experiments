function Enemy(game, spawn) {
	
	this.game = game;
	Phaser.Sprite.call(this, this.game, spawn.x, spawn.y, 'blackdude');
	
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    this.body.bounce.y = 0.2;
    this.body.collideWorldBounds = true;
    this.body.setSize(20, 32, 5, 16);

    this.animations.add('left', [0, 1, 2, 3], 10, true);
    this.animations.add('turn', [4], 20, true);
    this.animations.add('right', [5, 6, 7, 8], 10, true);

    CollisionManager.addObjectToGroup(this, 'enemies');
	this.game.add.existing(this);
	
	// AI updates
	//this.game.time.events.repeat(Phaser.Timer.HALF, 10, this.updateAI, this);
	this.game.time.events.repeat(Phaser.Timer.SECOND * 2, 10, this.updatePath, this);
	this.walkables = [0];
	this.pathfinder = this.game.plugins.add(Phaser.Plugin.PathFinderPlugin);	
	this.pathfinder.setGrid(this.game.map.layers[0].data, this.walkables);
	
	this.under_calc = false;


}

Enemy.prototype = Object.create( Phaser.Sprite.prototype );
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function(){


};

Enemy.prototype.findPathTo = function(tilex, tiley){

    this.pathfinder.setCallbackFunction(function(path) {
        path = path || [];
		//if (path) {
			//alert("Path was found. The first Point is " + path[0].x + " " + path[0].y);
		//}
        //for(var i = 0, ilen = path.length; i < ilen; i++) {
            //this.game.map.putTile(46, path[i].x, path[i].y);
        //}
        
        //logging.debug("value of my var is %s", str(path[i].x))                
        under_calc = false;
    });
	//[this.game.map.layers.getTileX(exit.x), this.game.map.layers.getTileY(exit.x)]
	this.pathfinder.preparePathCalculation([0,0], [tilex,tiley]);
    this.pathfinder.calculatePath();   
	
	this.game.map.putTile(46,0,1);
}

Enemy.prototype.updateAI = function(){
	
    if (this.under_calc == false) {
		this.under_calc = true;
		this.findPathTo(1, 1);
		//this.game.map.layers.getTileX(this.x), this.game.map.layers.getTileY(this.y)
    }

}

Enemy.prototype.updatePath = function(){
	
    //this.body.velocity.x = 0;
	this.body.velocity.x = this.game.rnd.integerInRange(-800, 800);

	this.body.velocity.y = this.game.rnd.integerInRange(-800, 800);

}
