module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'react-app', // 手動で追加
    'react-app/jest', // 手動で追加
    'prettier', // 追加
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // 手動で追加: suppress errors for missing 'import React' in files
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // 手動で追加: allow jsx syntax in js files (for next.js project), should add ".ts" if typescript project
  },
};