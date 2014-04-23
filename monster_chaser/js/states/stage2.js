
MainGame.Stage2State = function(game){
	
};

MainGame.Stage2State.prototype = {
	
	create: function(){

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		//this.game.stage.backgroundColor = '#000000';

		// resolution scale change
		//game.stage.fullScreenScaleMode = Phaser.StageScaleMode.SHOW_ALL;
		//this.game.scale.maxWidth = this.game.width;
    	//this.game.scale.maxHeight = this.game.height;
		//this.game.scale.setShowAll();
		//this.game.scale.refresh();


		//set-up map
		this.bg = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
		this.bg.fixedToCamera = true;
		this.LIGHT_RADIUS = 100;

		//tile-map
		this.game.map = this.game.add.tilemap('level1');
		this.game.map.addTilesetImage('tiles-1');
		this.game.map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);
		
		this.game.layer = this.game.map.createLayer('Tile Layer 1');
		
		// Debug stuff
		/*
		this.game.layer.debug = true;
		this.game.time.advancedTiming = true;
		this.fpsText = this.game.add.text(
			20, 20, '', { font: '16px Arial', fill: '#ffffff' }
		); */
		CollisionManager.addObjectToGroup(this.game.layer, 'layers');
		this.game.layer.resizeWorld();
		
		//setup world		
		this.game.physics.arcade.gravity.y = 550;	
		
		//adding entities
		this.game.player = new Player(this.game, {x:32, y:900}); //62, 32 for tile1		
		this.game.enemy = new Enemy(this.game, {x:62, y:900}, this.game.player);
		this.game.portal = new Portal(this.game, {x:150, y:920});			
		
		GUIManager.setup( function(){ 
			this.game.state.start('GameOver'); 
		});		
	
 		this.shadowTexture = this.game.add.bitmapData(this.game.width * 2, this.game.height * 2);
		var lightSprite = this.game.add.image(0, 0, this.shadowTexture);
 		lightSprite.blendMode = Phaser.blendModes.MULTIPLY;
	
		this.game.input.activePointer.x = this.game.width/2;
    	this.game.input.activePointer.y = this.game.height/2;
	},

	update: function(){

		//  if (this.game.time.fps !== 0) {
        //this.fpsText.setText(this.game.time.fps + ' FPS');
		//	}
		//InputManager.update();
		CollisionManager.update();
		GUIManager.update();
		
	    this.shadowTexture.context.fillStyle = 'rgb(0, 0, 0)';
    	this.shadowTexture.context.fillRect(0, 0, this.game.width * 2, this.game.height * 2);
		this.shadowTexture.context.beginPath();    	
		this.shadowTexture.context.fillStyle = 'rgb(255, 255, 255)';
    	
    	this.shadowTexture.context.arc(this.game.player.x, this.game.player.y, this.LIGHT_RADIUS, 0, Math.PI*2);
    	this.shadowTexture.context.fill();
    	this.shadowTexture.dirty = true;

	
	},

	render: function(){
		
		//debug stuff
		 //this.game.debug.text(this.game.time.physicsElapsed, 32, 700);
		 //this.game.debug.body(this.game.player);
		 //this.game.debug.body(this.game.enemy);
		 //this.game.debug.bodyInfo(this.game.enemy, 0, 30);
		 
	}


};
