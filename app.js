const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const allowCors = require('./middlewares/cors');

const usersRouter = require('./routes/users');
const gameRouter = require('./routes/games');
const groupRouter = require('./routes/groups');

const app = express();

app.use(logger('dev'));
app.use(express.json({ type: '*/json' }));
app.use(allowCors);
app.use((err, req, res, next) => {
  if (SyntaxError) {
    res.send({ message: 'É nessário enviar um json válido no corpo da requisição.' });
    next();
  }
});
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/games', gameRouter);
app.use('/group', groupRouter);
app.all('*', (req, res) => {
  res.status(404).send({ message: 'Endpoint não encontrado.' });
});

module.exports = app;
