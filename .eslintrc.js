module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'no-plusplus': 'off',
    'max-len': 'off',
    'prefer-destructuring': ['error', {'object': true, 'array': false}]

  },
};
