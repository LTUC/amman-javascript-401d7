const events = require('./events.js');

events.on('OnEnteringTheRoom', e => {
    console.log(`Welcome ${e.name} to ${e.chatRoom}`);
})

events.on('OnLeavingTheRoom', e => {
    console.log(`${e.name} has left ${e.chatRoom}`);
})

events.on('SaySomething', e => {
    console.log(`${e.name} says ${e.message}`);
})
