const path = require('path');
module.exports = {
  plugins: ['eslint-plugin-import'],
  env: {
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:import/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
  settings: {
    'import/resolver': {
      [path.resolve('resolver.cjs')]: {},
    },
  },
};
