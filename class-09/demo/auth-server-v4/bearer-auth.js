'use strict';
const Users = require('./users.js');
//  req = {
//   headers: {
//     authorization:"Bearer asdasd.asdasd.asdsad"
//   }
// }
module.exports = async (req, res, next) => {
  if (!req.headers.authorization || !req.headers.authorization === 'Bearer') {
    next('Invalid Login');
    return;
  }
  try {
    const token = req.headers.authorization.split(' ').pop();
    console.log('__TOKEN__', token);
    const validUser = await Users.authenticateWithToken(token);
    req.user = validUser;
    next();
  } catch (e) {
    next('Invalid Login');
  }
};
