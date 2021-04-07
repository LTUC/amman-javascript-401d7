'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET || 'supersecret';
const usersSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      default: 'user',
      enum: ['user', 'writer', 'editor', 'admin'],
    },
  },
  { toJSON: { virtuals: true } } //, toObject: { virtuals: true } }
);

usersSchema.virtual('capabilities').get(function () {
  const acl = {
    user: ['read'],
    writer: ['read', 'create'],
    editor: ['read', 'create', 'update'],
    admin: ['read', 'create', 'update', 'delete'],
  };
  return acl[this.role];
});
// const Users;
// const users = new Users({});
// await users.save()

// the pre hook will be called after calling .save() and before saving to DB
usersSchema.pre('save', async function () {
  console.log('SAVE_DOC', this);
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});
usersSchema.statics.authenticateBasic = async function (username, password) {
  try {
    const user = await this.findOne({ username });
    console.log('__USER__', user);
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      return user;
    } else {
      throw new Error('Invalid User');
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
usersSchema.statics.authenticateWithToken = async function (token) {
  try {
    const payload = jwt.verify(token, SECRET);
    console.log('__Payload__', payload);
    const user = await this.findOne({ username: payload.username });
    if (user) {
      return user;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

usersSchema.statics.generateToken = function (user) {
  console.log('CAPABILITIES', user);
  const token = jwt.sign(
    { username: user.username, capabilities: user.capabilities },
    SECRET
  );
  console.log('__TOKEN__', token);
  return token;
};
//static methods????
// give us the ability to add methods to the db model
// and we dont need to have an object of that model eg (new Users())
// usersSchema.statics.functionName = () => {};

// usersSchema.methods.functionName = () => {}; // this will set a method on the Class instance eg we need (new Users)
// const Users;
// const users = new Users()
// users.getName() ????
module.exports = mongoose.model('users', usersSchema);
