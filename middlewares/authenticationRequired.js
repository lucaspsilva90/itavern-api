module.exports = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status('401').json({ message: 'Por favor, realize login para acessar este endpoint' });
  }
};
