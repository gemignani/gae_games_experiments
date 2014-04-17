function Player(game, spawn) {
	
	this.game = game;
	Phaser.Sprite.call(this, this.game, spawn.x, spawn.y, 'dude');
	
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    this.body.bounce.y = 0.2;
    this.body.collideWorldBounds = true;
    this.body.setSize(20, 32, 5, 16);

    this.animations.add('left', [0, 1, 2, 3], 10, true);
    this.animations.add('turn', [4], 20, true);
    this.animations.add('right', [5, 6, 7, 8], 10, true);

    this.game.camera.follow(this);
	CollisionManager.addObjectToGroup(this, 'players');
	this.game.add.existing(this);
	
	//local vars
	this.facing = 'left';
	this.jumpTimer = this.game.time.now;
	this.playerdoublejump = 0;
}

Player.prototype = Object.create( Phaser.Sprite.prototype );
Player.prototype.constructor = Player;

Player.prototype.update = function(){

    this.body.velocity.x = 0;

    if (this.game.keys.LEFT.isDown) {
        this.body.velocity.x = -150;

        if (this.facing != 'left') {
            this.animations.play('left');
            this.facing = 'left';
        }
    }
    else if (this.game.keys.RIGHT.isDown) {
        this.body.velocity.x = 150;

        if (this.facing != 'right') {
            this.animations.play('right');
            this.facing = 'right';
        }
    }
    else
    {
        if (this.facing != 'idle') {
            this.animations.stop();

            if (this.facing == 'left') {
                this.frame = 0;
            }
            else {
                this.frame = 5;
            }

            this.facing = 'idle';
        }
    }
    
    if (this.game.keys.SPACE.isDown && this.game.time.now > this.jumpTimer) {
		if (this.body.onFloor() == 1 ) {
			this.playerdoublejump = 0;
			this.body.velocity.y = -250;
			this.jumpTimer = this.game.time.now + 550;
		} else if (this.playerdoublejump == 0) {
			this.playerdoublejump++;
			this.body.velocity.y = -200;
			this.jumpTimer = this.game.time.now + 500;			
		}
    }
};
