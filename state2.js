demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#80FF80';
        console.log('state2 biatch');
        addChangeStateEventListener();
    },
    update: function(){}
};

//function changeState(i, stateNum){
//    console.log(i);
//    game.state.start('state' + stateNum);
//}
//
//function addKeyCallback(key, fn, args){
//    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
//}

//function addChangeStateEventListener(){
//    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
//    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
//}