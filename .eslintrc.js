module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [`react-app`, 'plugin:@typescript-eslint/recommended'],
  plugins: ['react-hooks'],
  rules: {
    // Next.js doesn't require react to be in scope
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
