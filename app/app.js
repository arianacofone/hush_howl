const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const authentication = require('./middleware/authentication');
const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');
const sentenceRouter = require('./routes/sentenceRouter');
const letterRouter = require('./routes/letterRouter');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: true,
  saveUninitialized: true,
}));

app.use(morgan('dev'));

app.use('/api/register', registerRouter);

module.exports = app;
