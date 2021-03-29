'use strict';
const express = require('express');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middlewares/logger.js');
const app = express();
//global middleware
app.use(express.json());
app.use(logger);
// http://localhost:5000/fruit?type=apple
app.get('/fruit', (req, res) => {
  console.log('__QUERY__', req.query);
  const output = {
    type: req.query.type,
  };
  res.json(output);
});

//http://localhost:5000/fruit/apple
app.get('/fruit/:type', (req, res) => {
  console.log('__Params__', req.params);
  const output = {
    type: req.params.type,
  };
  res.json(output);
});
//http://localhost:5000/fruit/apple/55
app.get('/fruit/:type/:cal', (req, res) => {
  console.log('__Params2__', req.params);
  const output = {
    type: req.params.type,
    cal: req.params.cal,
  };
  res.json(output);
});
//http://localhost:5000/fruit

// in body
/*
{
  "type":"apple"
}
*/
app.post('/fruit', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});
// http://localhost:5000/fruit/1

// in body
/*
{
  "type":"orange"
}
*/
app.put('/fruit/:fruit_id', (req, res) => {
  console.log('Body', req.params.fruit_id, req.body);
  res.json(req.body);
});

app.get('/bad', (req, res) => {
  throw new error('something wrong!!');
});
app.get('/foo', (req, res, next) => {
  next('something wrong!!');
});

function square(n) {
  // any vars will be global to the inner function
  return (req, res, next) => {
    if (typeof n !== 'number') {
      next('Not a number');
    } else {
      req.number = n * n;
      next();
    }
  };
}
app.get('/middleware', square(10), (req, res) => {
  console.log(req.number);
  res.json({ number: req.number });
});
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || 5000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};
