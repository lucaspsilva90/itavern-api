module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Allow-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Allow-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
}