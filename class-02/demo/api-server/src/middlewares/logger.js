module.exports = (req, res, next) => {
  console.log('__Request__', req.method, req.path);
  //very important note we have to invoke the next function with no arguments
  next();
};
