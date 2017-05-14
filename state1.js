var demo = {}, centerX = 1500 / 2, centerY = 1000 / 2, adam, speed = 4;
demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){
        game.load.image('adam', 'assets/sprites/adam.png');
    },
    create: function(){
        game.stage.backgroundColor = '#800080';
        console.log('state1 biatch');
        addChangeStateEventListener();
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        adam = game.add.sprite(centerX, centerY, 'adam');
        adam.anchor.setTo(0.5, 0.5);
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            adam.x += speed;
        } else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            adam.x -= speed;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            adam.y -= speed;
        } else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            adam.y += speed;
        }
    }
};

function changeState(i, stateNum){
    console.log(i);
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListener(){
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
}