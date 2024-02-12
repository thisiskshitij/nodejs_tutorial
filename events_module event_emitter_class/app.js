// event module is already built into node.js
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1,num2)=>{
    console.log('tutorial event has occured',num1+num2);
});

eventEmitter.emit('tutorial',1,2);


//incomplete
