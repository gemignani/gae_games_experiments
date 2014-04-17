
function AiManager(game) {
	
	this.game = game;
	
}

AiManager.prototype.setup = function() {

	this.var walkables = [0];
	this.pathfinder = this.game.plugins.add(Phaser.Plugin.PathFinderPlugin);
	this.pathfinder.setGrid(map.layers[0].data, walkables);
}

AiManager.prototype.update = function() {

}

AiManager.prototype.updateAI = function() {
	
    /*if (!under_calc) {
		this.under_calc = true;
		this.findPathTo(layer.getTileX(enemy.x), layer.getTileY(enemy.y));
    }*/

}

AiManager.prototype.findPathTo = function(tilex, tiley) {

    this.pathfinder.setCallbackFunction(function(path) {
        path = path || [];
		//if (path) {
		//	alert("Path was found. The first Point is " + path[0].x + " " + path[0].y);
		//}
        /*for(var i = 0, ilen = path.length; i < ilen; i++) {
            this.map.putTile(46, path[i].x, path[i].y);
        }*/
        
        //logging.debug("value of my var is %s", str(path[i].x))
                
        under_calc = false;
    });
	
	this.pathfinder.preparePathCalculation([layer.getTileX(exit.x),layer.getTileY(exit.x)], [tilex,tiley]);
    this.pathfinder.calculatePath();
    
}


