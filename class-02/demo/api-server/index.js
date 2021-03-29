'use strict';
require('dotenv').config();
// const server = ....
// server.start()
require('./src/server.js').start(process.env.PORT);

// console.log('Env?', process.env.NODE_ENV);
