const events = require('./events.js');
require('./chatRoom.js');

events.emit('OnEnteringTheRoom', {name: 'Ahmad', chatRoom: 'room 1'});
events.emit('SaySomething', {name: 'Ahmad', message: 'Hi'});
events.emit('OnLeavingTheRoom', {name: 'Ahmad', chatRoom: 'room 1'});

