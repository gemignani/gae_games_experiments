function Portal(game, spawn) {
	
	this.game = game;
	Phaser.Sprite.call(this, this.game, spawn.x, spawn.y, 'portal');
	
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    //this.body.collideWorldBounds = true;
    //this.body.setSize(10, 10, 5, 5);
	this.body.immovable = true;
	this.body.allowGravity = false;
	
	
    CollisionManager.addObjectToGroup(this, 'portals');
	this.game.add.existing(this);

}

Portal.prototype = Object.create( Phaser.Sprite.prototype );
Portal.prototype.constructor = Enemy;

Portal.prototype.update = function(){



};

