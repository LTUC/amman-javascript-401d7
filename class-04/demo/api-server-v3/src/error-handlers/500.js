module.exports = (err, req, res, next) => {
  // Sometimes, errors come in as an object, others as a string
  const error = err.message ? err.message : err;
  res.status(500);
  res.statusMessage = 'Server Error :(';
  res.json({ error });
};
