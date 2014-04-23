
MainGame.Stage1State = function(game){
	
};

MainGame.Stage1State.prototype = {
	
	create: function(){

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.stage.backgroundColor = '#000000';

		//set-up map
		this.bg = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
		this.bg.fixedToCamera = true;
		this.LIGHT_RADIUS = 100;

		//tile-map
		this.game.map = this.game.add.tilemap('level1');
		this.game.map.addTilesetImage('tiles-1');
		this.game.map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);
		this.game.layer = this.game.map.createLayer('Tile Layer 1');

		CollisionManager.addObjectToGroup(this.game.layer, 'layers');
		this.game.layer.resizeWorld();
		
		//setup world		
		this.game.physics.arcade.gravity.y = 550;	
		
		//adding entities
		
		this.game.time.events.repeat(Phaser.Timer.SECOND * 5, 10,  function(){
			var rWidth=game.rnd.integerInRange(0, this.game.width); 
			var rHeight=game.rnd.integerInRange(0, this.game.height); 
			var enemy = new Enemy(this.game, {x:rWidth, y:rHeight});
			enemy.setTarget(this.game.player);
			}
		, this);

		this.game.portal = new Portal(this.game, {x:850, y:920});		

		//dark effect
 		this.shadowTexture = this.game.add.bitmapData(this.game.width * 2, this.game.height * 2);
		var lightSprite = this.game.add.image(0, 0, this.shadowTexture);
 		lightSprite.blendMode = Phaser.blendModes.MULTIPLY;		

		this.game.player = new Player(this.game, {x:32, y:900}); //62, 32 for tile1			
		
		
		GUIManager.setup( function(){ 
			this.game.state.start('Stage2'); 
		});

	},

	update: function(){

	    this.shadowTexture.context.fillStyle = 'rgb(0, 0, 0)';
    	this.shadowTexture.context.fillRect(0, 0, this.game.width * 2, this.game.height * 2);
		this.shadowTexture.context.beginPath();    	
		this.shadowTexture.context.fillStyle = 'rgb(255, 255, 255)';
    	
    	this.shadowTexture.context.arc(this.game.player.x, this.game.player.y, this.LIGHT_RADIUS, 0, Math.PI*2);
    	this.shadowTexture.context.fill();
    	this.shadowTexture.dirty = true;

		CollisionManager.update();
		GUIManager.update();
		
	
	},

	render: function(){
		
		//debug stuff
		 //this.game.debug.text(this.game.time.physicsElapsed, 32, 700);
		 //this.game.debug.body(this.game.player);
		 //this.game.debug.body(this.game.enemy);
		 //this.game.debug.bodyInfo(this.game.enemy, 0, 30);
		 
	}


}

;
