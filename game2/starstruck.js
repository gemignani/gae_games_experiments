
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'chaser', { preload: preload, create: create, update: update, render: render });

function preload() {

    //game.load.tilemap('level1', 'assets/games/starstruck/level1.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.tilemap('level0', 'assets/games/starstruck/level0.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles-1', 'assets/games/starstruck/tiles-1.png');
    game.load.spritesheet('dude', 'assets/games/starstruck/dude.png', 32, 48);
    game.load.spritesheet('blackdude', 'assets/games/starstruck/blackdude.png', 32, 48);
    game.load.spritesheet('droid', 'assets/games/starstruck/droid.png', 32, 32);
    game.load.image('background', 'assets/games/starstruck/background2.png');
    game.load.image('door', 'assets/games/starstruck/door.png');

}

var map;
var tileset;
var layer;
var player;
var enemy;
var exit;
var facing = 'left';
var jumpTimer = 0;
var cursors;
var jumpButton;
var bg;
var playerdoublejump = 0;
var pathfinder;
var under_calc = false;


var marker;


function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = '#000000';

    //set-up map
    bg = game.add.tileSprite(0, 0, 800, 600, 'background');
    bg.fixedToCamera = true;
	
	//tile-map
    map = game.add.tilemap('level0');
	map.addTilesetImage('tiles-1');
	
	//collision
	map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);
    layer = map.createLayer('Tile Layer 1');

	//path-finding
    var walkables = [0];
    pathfinder = game.plugins.add(Phaser.Plugin.PathFinderPlugin);
    pathfinder.setGrid(map.layers[0].data, walkables);

    //Un-comment this on to see the collision tiles
    //layer.debug = true;

    //setup world
    layer.resizeWorld();
    game.physics.arcade.gravity.y = 350;
	
    exit = game.add.sprite(500, 500, 'door');

    //adding main char 'player'
    //player = game.add.sprite(32, 32, 'dude');
	player = game.add.sprite(32, 900, 'dude');
    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.bounce.y = 0.2;
    player.body.collideWorldBounds = true;
    player.body.setSize(20, 32, 5, 16);

    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('turn', [4], 20, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    game.camera.follow(player);

   //adding enemy char 'enemy'
    //enemy = game.add.sprite(62, 32, 'blackdude');
	enemy = game.add.sprite(62, 900, 'blackdude');
    game.physics.enable(enemy, Phaser.Physics.ARCADE);

    enemy.body.bounce.y = 0.2;
    enemy.body.collideWorldBounds = true;
    enemy.body.setSize(20, 32, 5, 16);

    enemy.animations.add('left', [0, 1, 2, 3], 10, true);
    enemy.animations.add('turn', [4], 20, true);
    enemy.animations.add('right', [5, 6, 7, 8], 10, true);
    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	
	
	
    marker = game.add.graphics();
    marker.lineStyle(2, 0x000000, 1);
    marker.drawRect(0, 0, 32, 32);
	

}

function findPathTo(tilex, tiley) {

    pathfinder.setCallbackFunction(function(path) {
        path = path || [];
		if (path==null) {
			alert("Path was not found.");
		} else {
			alert("Path was found. The first Point is " + path[0].x + " " + path[0].y);
		}
        for(var i = 0, ilen = path.length; i < ilen; i++) {
            map.putTile(46, path[i].x, path[i].y);
        }
        //under_calc = false;
    });
//enemy.position.x, enemy.position.y
    //pathfinder.preparePathCalculation([0, 0], [30, 30]);
	pathfinder.preparePathCalculation([0,0], [tilex,tiley]);
    pathfinder.calculatePath();
}


function update() {

    game.physics.arcade.collide(player, layer);
    game.physics.arcade.collide(enemy, layer);
    game.physics.arcade.collide(enemy, player);

    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -150;

        if (facing != 'left')
        {
            player.animations.play('left');
            facing = 'left';
        }
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 150;

        if (facing != 'right')
        {
            player.animations.play('right');
            facing = 'right';
        }
    }
    else
    {
        if (facing != 'idle')
        {
            player.animations.stop();

            if (facing == 'left')
            {
                player.frame = 0;
            }
            else
            {
                player.frame = 5;
            }

            facing = 'idle';
        }
    }
    
    if (jumpButton.isDown && game.time.now > jumpTimer)
    {
		if (player.body.onFloor() == 1 ) {
			playerdoublejump = 0;
				player.body.velocity.y = -250;
				jumpTimer = game.time.now + 550;
		} else if (playerdoublejump == 0) {
				player.body.velocity.y = -200;
				jumpTimer = game.time.now + 500;
			playerdoublejump++;
		}
    }

	marker.x = layer.getTileX(game.input.activePointer.worldX);
    marker.y = layer.getTileY(game.input.activePointer.worldY);

	
    if (game.input.mousePointer.isDown && !under_calc)
    {
		under_calc = true;
		alert("pointer marker.x = " + marker.x + " pointer marker.y = " + marker.y);		
		alert("layer.getTileX(marker.x) = " + layer.getTileX(marker.x) + " layer.getTileY(marker.y) = " + layer.getTileY(marker.y));		
        //findPathTo(exit.x, exit.y);
		findPathTo(layer.getTileX(marker.x), layer.getTileY(marker.y));
    }


}

function render () {

	//debug stuff
     //game.debug.text(game.time.physicsElapsed, 32, 32);
     //game.debug.body(player);
     game.debug.bodyInfo(player, 16, 24);

}
