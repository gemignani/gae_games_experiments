
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
		
		//collision
		this.game.map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);
		this.game.layer = this.game.map.createLayer('Tile Layer 1');

		//path-finding
		AiManager.setup();

		//Un-comment this on to see the collision tiles
		//layer.debug = true;

		//setup world
		this.game.layer.resizeWorld();
		this.game.physics.arcade.gravity.y = 350;
		
		this.exit = game.add.sprite(500, 500, 'door');

		//adding main char 'player'
		this.game.player = new Player(this.game, {x:32, y:900}); //62, 32 for tile1
		
		//adding enemy char 'enemy'
		this.game.enemy = new Enemy(this.game, {x:62, y:900});
		
		
		//cursors = game.input.keyboard.createCursorKeys();
		//jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		
		// AI updates
		//game.time.events.repeat(Phaser.Timer.HALF, 10, updateAI, this);	
    
    
	/*	this.game.walls.resizeWorld();
		CollisionManager.addObjectToGroup(this.game.walls, 'layers');

		this.game.player = new Player(this.game, {x:800, y:300});

		var tooth = new Tooth(this.game, { x: 800, y: 400 });
		this.tooth = tooth;
		this.game.camera.follow(this.game.player);

		GUIManager.setup();
		InputManager.setup();
		WaveManager.setup();

		//this.game.input.mouse.requestPointerLock();

		this.game.turret_small_sfx = this.game.add.audio('turret_small_sfx');
		this.game.turret_small_sfx.volume = .05;
		this.game.turret_big_sfx = this.game.add.audio('turret_big_sfx');
		this.game.player_shoot_sfx = this.game.add.audio('player_shoot_sfx');
		this.game.player_shoot_sfx.volume = .2;
		this.game.baddie_die_sfx = this.game.add.audio('baddie_die_sfx');
		this.game.baddie_die_sfx.volume = .1;
		this.game.player_hurt_sfx = this.game.add.audio('player_hurt_sfx');
		this.game.player_hurt_sfx.volume = .4;

		InventoryManager.addToInventory('gun', 1);
		InventoryManager.addToInventory('hammer', 0);
		InventoryManager.addToInventory('turret_small', 0);
		InventoryManager.addToInventory('turret_big', 0);*/
	},

	update: function(){

		//InputManager.update();
		//CollisionManager.update();
		//GUIManager.update();
		//WaveManager.update();
		//game.physics.arcade.collide(player, layer);
		//game.physics.arcade.collide(enemy, layer);
		//game.physics.arcade.collide(enemy, player);
	},

	render: function(){
		
		//debug stuff
		 //game.debug.text(game.time.physicsElapsed, 32, 32);
		 //game.debug.body(player);
		 //game.debug.bodyInfo(player, 16, 24);
	}
};
