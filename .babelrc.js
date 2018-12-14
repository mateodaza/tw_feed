const env = require('./env-config.js')

module.exports = {
  presets: ['next/babel'],
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    ['transform-define', env]
  ]
}