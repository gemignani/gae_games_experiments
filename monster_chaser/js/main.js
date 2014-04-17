var width = 800;
var height = 600;

var game = new Phaser.Game(width, height, Phaser.CANVAS, 'chaser');

game.state.add('Boot', MainGame.BootState);
game.state.add('Loader', MainGame.LoaderState);
game.state.add('MainMenu', MainGame.MainMenuState);
game.state.add('Game', MainGame.GameState);
//game.state.add('GameOver', MainGame.GameOverState);

GUIManager = new GUIManager(game);
CollisionManager = new CollisionManager(game);


game.state.start('Boot');

window.game = game;
