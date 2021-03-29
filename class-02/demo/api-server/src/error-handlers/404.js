module.exports = (req, res) => {
  res.status(404);
  res.json({
    message: 'Not Found',
    route: req.path,
  });
};
