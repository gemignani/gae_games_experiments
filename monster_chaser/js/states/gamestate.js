
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
		this.game.map = this.game.add.tilemap('level1');
		this.game.map.addTilesetImage('tiles-1');
		this.game.map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);
		
		this.game.layer = this.game.map.createLayer('Tile Layer 1');
		
		//Un-comment this on to see the collision tiles
		//this.game.layer.debug = true;
		CollisionManager.addObjectToGroup(this.game.layer, 'layers');
		this.game.layer.resizeWorld();
		
		//setup world		
		this.game.physics.arcade.gravity.y = 550;	
		
		//adding entities
		this.game.player = new Player(this.game, {x:32, y:900}); //62, 32 for tile1		
		this.game.enemy = new Enemy(this.game, {x:62, y:900});		//game.world.randomX
		this.game.portal = new Portal(this.game, {x:20, y:20});		
		//this.exit = game.add.sprite(500, 500, 'door');
		
		//GUIManager.setup();

	},

	update: function(){

		//InputManager.update();
		CollisionManager.update();
		//GUIManager.update();
		//WaveManager.update();
		
	},

	render: function(){
		
		//debug stuff
		 //this.game.debug.text(this.game.time.physicsElapsed, 32, 700);
		 this.game.debug.body(this.game.player);
		 this.game.debug.bodyInfo(this.game.player, 0, 30);
		 
	}
};
