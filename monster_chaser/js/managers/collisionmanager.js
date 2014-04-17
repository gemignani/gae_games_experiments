
function CollisionManager(game){
	
	this.game = game;
	this.groups = {
		  players: []
		, layers: []
		, enemies: []
	};
}

CollisionManager.prototype.addObjectToGroup = function(obj, group){
	
	var arr = this.groups[group];
	arr.push(obj);
};

CollisionManager.prototype.removeObjectFromGroup = function(obj, group){

	var arr = this.groups[group];

	if(arr.indexOf(obj) >= 0){
		arr.splice(arr.indexOf(obj), 1);
	}

};

CollisionManager.prototype.purge = function(){

	for(var i in this.groups){
		var arr = this.groups[i];
		arr = [];
	}
}

CollisionManager.prototype.update = function(){

	//PLAYER VS LAYER
	for( var i = 0; i < this.groups.players.length; i++ ){
		var player = this.groups.players[i];
		for( var k = 0; k < this.groups.layers.length; k++ ){
			var layer = this.groups.layers[k];
			this.game.physics.arcade.collide(player, layer);
		}
	}
	
	//PLAYER VS ENEMIES
	for( var i = 0; i < this.groups.players.length; i++ ){
		var player = this.groups.players[i];
		for( var k = 0; k < this.groups.enemies.length; k++ ){
			var enemies = this.groups.enemies[k];
			this.game.physics.arcade.collide(player, enemies);
		}
	}
	
	//ENEMY VS LAYER
	for( var i = 0; i < this.groups.enemies.length; i++ ){
		var enemies = this.groups.enemies[i];
		for( var k = 0; k < this.groups.layers.length; k++ ){
			var layer = this.groups.layers[k];
			this.game.physics.arcade.collide(enemies, layer);
		}
	}
	

};