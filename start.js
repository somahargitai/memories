require('@babel/polyfill');
require('@babel/register')({
  presets: ['@babel/preset-env']
});

const app = require('./server.js')

module.exports = app;
