'use strict';
require('dotenv').config();
const superagent = require('superagent');
const User = require('./users.js');
// this came from the docs
//https://docs.github.com/en/developers/apps/authorizing-oauth-apps
const tokenServerUrl = 'https://github.com/login/oauth/access_token';
const remoteAPI = 'https://api.github.com/user';
// gh OAuth app secrets
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI; //'http://localhost:3000/gh_oauth';
// localhost:3000/gh_oauth?code=asdsadsadsadsadfdfdf
module.exports = async (req, res, next) => {
  try {
    // the code will come from the popup
    const code = req.query.code;
    console.log('1. CODE:', code);
    const remoteToken = await exchangeCodeForToken(code);
    console.log('2. ACCESS TOKEN', remoteToken);
    const remoteUser = await getRemoteUserInfo(remoteToken);
    console.log('3. GITHUB USER', remoteUser);
    const [user, token] = await getUser(remoteUser);
    console.log('4. LOCAL USER', user, token);
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    next(error.message);
  }
};

//helper functions

async function exchangeCodeForToken(code) {
  const tokenResponse = await superagent.post(tokenServerUrl).send({
    code: code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: REDIRECT_URI,
    grant_type: 'authorization_code',
  });
  const accessToken = tokenResponse.body.access_token;
  return accessToken;
}

async function getRemoteUserInfo(token) {
  const userResponse = await superagent
    .get(remoteAPI)
    .set('Authorization', `token ${token}`)
    .set('user-agent', 'express-app');
  const user = userResponse.body;
  return user;
}

async function getUser(remoteUser) {
  const userRecord = {
    username: remoteUser.login,
    password: 'oauthpassword', // this can be anything (it will be hashed)
  };
  const user = new User(userRecord);
  const userDoc = user.save();
  const token = User.generateToken(userDoc);
  return [user, token];
}
