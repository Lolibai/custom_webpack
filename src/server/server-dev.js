import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack.dev.js';

const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, 'index.html'),
  compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res, next) => {
  res.sendFile(HTML_FILE);
});

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening to ${PORT}....`);
  // eslint-disable-next-line no-console
  console.log('Press Ctrl+C to quit.');
});
