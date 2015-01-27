var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

var main_state = {

    preload: function() { 
		this.game.stag.backgroundColor = '#71c5cf';
		
		this.game.load.image('bird', 'assets/bird.png');
		
		this.game.load.image('pipe', 'assets/pipe.png');
    },

    create: function() { 
        this.bird = this.game.add.sprite(100, 245, 'bird');
        
        this.bird.body.gravity.y = 1000;
        
        var space_key =
this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.jump, this);
        
        this.pipe = game.add.group();
        this.pipes.createMultiple(20,'pipe');
        
        this.timer = this.game.time.events.loop(1500,
        this.add_row_of_pipes, this);
        
        this.score = 0;
        var style
    },
    
    update: function() {
	    if (this.bird.inWorld === false)
	        this.restart_game();
    },
    
    jump:function() {
        this.bird.velocity.y = -350;
    },
    
    restart_game: function() {
        this.game.state.start('main');
        
        this.game.time.events.remove(this.timer);
    },
    
    add_one_pipe: function(x, y) {
        var pipe = this.pipes.getFirstDead();
        
        pipe.reset(x, y);
        
        pipe.body.velocity.x = -200;
        
        pipe.outOfBoudsKills = true;
    },
    
    add_row_of_pipes: function() {
        var hole - Math.floor(Math.random()*5)+1;
        
        for(var i = 0; 1 < 8; i++)
            if (i != hole && i != hole +1)
                this.add_one_pipe(400, i*60+10);
    },
};


game.state.add('main', main_state);  
game.state.start('main'); 
