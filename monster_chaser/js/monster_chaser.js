var width = 800;
var height = 600;

var game = new Phaser.Game(width, height, Phaser.CANVAS, 'chaser');

game.state.add('Boot', MainGame.BootState);
game.state.add('Loader', MainGame.LoaderState);
game.state.add('MainMenu', MainGame.MainMenuState);
game.state.add('Game', MainGame.GameState);
//game.state.add('GameOver', MainGame.GameOverState);

AiManager = new AiManager(game);


game.state.start('Boot');

window.game = game;

/*

var map;
var tileset;
var layer;

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
*/

