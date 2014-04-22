var width = 800;
var height = 600;

var game = new Phaser.Game(width, height, Phaser.AUTO, 'chaser');

game.state.add('Boot', MainGame.BootState);
game.state.add('Loader', MainGame.LoaderState);
game.state.add('MainMenu', MainGame.MainMenuState);
game.state.add('Stage1', MainGame.Stage1State);
game.state.add('Stage2', MainGame.Stage2State);
game.state.add('GameOver', MainGame.GameOverState);

GUIManager = new GUIManager(game);
CollisionManager = new CollisionManager(game);
EffectManager = new EffectManager(game);


game.state.start('Boot');

window.game = game;
