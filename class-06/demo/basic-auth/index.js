'use strict';
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const usersSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const Users = mongoose.model('users', usersSchema);

app.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = new Users({ username, password: hash });
    const record = await user.save();
    res.status(201).json(record);
  } catch (error) {
    res.status(403).json({ error: error.message });
  }
});

app.post('/signin', async (req, res) => {
  // req.headers.authorization => "Basic asdasdasd="
  // we can split on the space and choose [1]
  //we get string from base64.decode("asadasd=")
  // user:pass
  // split :
  console.log('__HEADERS__', req.headers.authorization);
  const encoded = req.headers.authorization.split(' ')[1]; // => ["Basic","asdasd="]
  console.log('__ENCODED___', encoded);
  const decoded = base64.decode(encoded);
  console.log('__DECODED__', decoded);
  const [username, password] = decoded.split(':');
  console.log('__USERNAME__', username, '__Password__', password);
  try {
    const user = await Users.findOne({ username });
    console.log('__DB_RECORD__', user);
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      res.json(user);
    } else {
      res.status(401).json({ error: 'Invalid User/Password' });
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

mongoose
  .connect('mongodb://localhost:27017/auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3000, () => console.log('up and running'));
  })
  .catch((e) => console.error('CONNECTION ISSUE', e.message));
