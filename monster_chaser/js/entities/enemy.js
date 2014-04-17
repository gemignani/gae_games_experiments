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

    this.game.camera.follow(this);
	
	this.game.add.existing(this);
}

Enemy.prototype = Object.create( Phaser.Sprite.prototype );
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function(){

    this.body.velocity.x = 0;

    /*if (cursors.left.isDown) {
        this.body.velocity.x = -150;

        if (this.ffacing != 'left') {
            this.animations.play('left');
            this.facing = 'left';
        }
    }
    else if (cursors.right.isDown) {
        this.body.velocity.x = 150;

        if (this.ffacing != 'right') {
            this.animations.play('right');
            this.ffacing = 'right';
        }
    }
    else
    {
        if (this.ffacing != 'idle') {
            this.animations.stop();

            if (this.ffacing == 'left') {
                this.frame = 0;
            }
            else {
                this.frame = 5;
            }

            this.ffacing = 'idle';
        }
    }
    
    if (jumpButton.isDown && game.time.now > this.jumpTimer) {
		if (this.body.onFloor() == 1 ) {
			this.playerdoublejump = 0;
				this.body.velocity.y = -250;
				this.jumpTimer = game.time.now + 550;
		} else if (this.fplayerdoublejump == 0) {
				this.body.velocity.y = -200;
				this.jumpTimer = game.time.now + 500;
			this.playerdoublejump++;
		}
    }*/
    
    /*
	if(this.game.keys.UP.isDown){
		this.body.velocity.y = -this.speed;
	}
	else if(this.game.keys.DOWN.isDown){
		this.body.velocity.y = this.speed;
	}
	else{
		this.body.velocity.y = 0;
	}

	if(this.game.keys.LEFT.isDown){
		this.body.velocity.x = -this.speed;
	}
	else if(this.game.keys.RIGHT.isDown){
		this.body.velocity.x = this.speed;
	}
	else{
		this.body.velocity.x = 0;
	}

	var dist  = this.game.input.mousePointer.worldX - this.x;

	if(dist >= 0){
		this.dir = "right";
	}
	else{
		this.dir = "left"
	}

	if(this.body.velocity.x != 0 || this.body.velocity.y != 0){
		if(this.damaged){
			this.animations.play(this.dir + '-damaged');
		}
		else{
			this.animations.play(this.dir);
		}
	}
	else{
		if(this.damaged){
			this.animations.play(this.dir + '-idle-damaged');
		}
		else{
			this.animations.play(this.dir + '-idle')
		}
	}*/


};
