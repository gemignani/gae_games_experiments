
MainGame.GameState = function(game){
	
};

MainGame.GameState.prototype = {
	
	create: function(){

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.stage.backgroundColor = '#000000';

		//set-up map
		this.bg = this.game.add.tileSprite(0, 0, 800, 600, 'background');
		this.bg.fixedToCamera = true;
		
		//tile-map
		this.game.map = this.game.add.tilemap('level0');
		this.game.map.addTilesetImage('tiles-1');
		this.game.map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);
		
		
		this.game.layer = this.game.map.createLayer(0);
		this.game.layer.resizeWorld();
		//Un-comment this on to see the collision tiles
		//this.game.layer.debug = true;
		CollisionManager.addObjectToGroup(this.game.layer, 'layers');
		
		//setup world		
		this.game.physics.arcade.gravity.y = 350;	
		
		//adding entities
		this.game.player = new Player(this.game, {x:32, y:800}); //62, 32 for tile1		
		this.game.enemy = new Enemy(this.game, {x:62, y:800});		
		//this.exit = game.add.sprite(500, 500, 'door');
		
		GUIManager.setup();

	},

	update: function(){

		//InputManager.update();
		CollisionManager.update();
		GUIManager.update();
		//WaveManager.update();
		
	},

	render: function(){
		
		//debug stuff
		 //game.debug.text(game.time.physicsElapsed, 32, 32);
		 //game.debug.body(player);
		 //game.debug.bodyInfo(player, 16, 24);
	}
};
