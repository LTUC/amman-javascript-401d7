const express = require('express');
const mongoose = require('mongoose');
const User = require('./users.js');
const basicAuth = require('./basic-auth.js');
const bearerAuth = require('./bearer-auth.js');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/signup', (req, res) => {
  console.log('HERE??');
  const user = new User(req.body);
  user
    .save()
    .then((userDoc) => {
      const token = User.generateToken(userDoc);
      res.status(201).json({ token });
    })
    .catch((e) => {
      res.status(403).json({ error: e.message });
    });
});

app.post('/signin', basicAuth, (req, res) => {
  res.json({ token: req.token });
});

app.get('/user', bearerAuth, (req, res) => {
  res.json({ user: req.user });
});

mongoose
  .connect('mongodb://localhost:27017/auth', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log('Up'));
  })
  .catch((e) => console.log(e));
