const env = require('./env-config.js')

module.exports = {
  env: {
    development:{
      presets: ['next/babel'],
      plugins: [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ['transform-define', env]
      ]
    },
    production: {
      presets: ['next/babel'],
      plugins: [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ['transform-define', env]
      ],
    },
    test:{
      presets: [["next/babel", { "preset-env": { "modules": "commonjs" } }]],
      plugins: [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ['transform-define', env]
      ],
    }
  }
}