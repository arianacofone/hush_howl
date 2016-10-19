if (!process.env) {
  require('dotenv').config();
}

process.env.ENV = process.env.ENV || 'dev';

const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackMiddleWare = require('webpack-dev-middleware');
const config = require('./webpack.config');
const app = require('./app/app');
const fallback = require('express-history-api-fallback');

if (process.env.ENV === 'dev') {
  const compiler = webpack(config);
  const middleware = webpackMiddleWare(compiler, {
    stats: {
      colors: true,
      chunks: false,
    },
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, '/dist')));
app.use(fallback('index.html', { root: __dirname + '/dist'}));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
