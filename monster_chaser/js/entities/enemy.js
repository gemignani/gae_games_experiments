function Enemy(game, spawn) {
	
	this.game = game;
	Phaser.Sprite.call(this, this.game, spawn.x, spawn.y, 'ghost');
	
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    this.body.bounce.setTo(3,3);
    //this.body.collideWorldBounds = true;
    this.body.setSize(20, 32, 5, 16);
	this.body.allowGravity = false;

    CollisionManager.addObjectToGroup(this, 'enemies');
	this.game.add.existing(this);
	
	this.MAX_SPEED = 350; // pixels/second
    this.MIN_DISTANCE = 32; // pixels

	// AI updates
	//this.game.time.events.repeat(Phaser.Timer.HALF, 10, this.updateAI, this);
	//this.game.time.events.repeat(Phaser.Timer.SECOND * 2, 10, this.updatePath, this);
	//this.walkables = [0];
	//this.pathfinder = this.game.plugins.add(Phaser.Plugin.PathFinderPlugin);	
	//this.pathfinder.setGrid(this.game.map.layers[0].data, this.walkables);
	
	//this.under_calc = false;


}

Enemy.prototype = Object.create( Phaser.Sprite.prototype );
Enemy.prototype.constructor = Enemy;

Enemy.prototype.setTarget = function(target){
	this.alvo = target;
}
Enemy.prototype.update = function(){

	var tmprotation = this.game.physics.arcade.moveToObject(this, this.alvo, 40, 4000);
	
	//game.physics.arcade.accelerateToObject(this, this.alvo, 60, 800);

    /*if (this.game.physics.arcade.distanceBetween(this.tank, this.player) < 300){
        if (this.game.time.now > this.nextFire && this.bullets.countDead() > 0){
            this.nextFire = this.game.time.now + this.fireRate;
            var bullet = this.bullets.getFirstDead();
            bullet.reset(this.turret.x, this.turret.y);
            bullet.rotation = this.game.physics.arcade.moveToObject(bullet, this.player, 500);
        }
    }*/


};
/*
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
	//this.body.velocity.x = this.game.rnd.integerInRange(-800, 800);
	//this.body.velocity.y = this.game.rnd.integerInRange(-800, 800);

}
*/