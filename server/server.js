import express from 'express';
import fs from 'fs';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import webpackConfig from '../webpack.config.dev.babel';
import webpackMiddleware from 'webpack-dev-middleware';
import HMR from 'webpack-hot-middleware';

import App from '../src/App';

const app = express();

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler));
app.use(HMR(compiler));

//GETリクエストでルートにアクセスが会った時の動作
app.get('/', (req, res)=>{
  let index = fs.readFileSync('./public/index.html', 'utf-8');

  const appRendered = renderToString(
    <App />
  );
  index = index.replace('<%= preloadedApplication %>', appRendered);
  res.send(index);
});

//3000番ポートを使ってサーバーを立ち上げ
app.listen(3000, ()=>{
  console.log('app listening on 3000');
});
