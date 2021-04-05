'use strict';

const base64 = require('base-64');
const Users = require('./users.js');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization || !req.headers.authorization === 'Basic') {
    next('Invalid Login');
    return;
  }
  try {
    const basic = req.headers.authorization.split(' ').pop();
    const [username, password] = base64.decode(basic).split(':');
    console.log('__USERNAME&PASSWORD__', username, password);
    const validUser = await Users.authenticateBasic(username, password);
    console.log('__VALID_USER__', validUser);
    const token = Users.generateToken(validUser);
    console.log('__TOKEN__', token);
    req.token = token;
    next();
  } catch (e) {
    next('Invalid Login');
  }
};
