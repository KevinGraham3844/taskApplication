


module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'indent': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    "no-use-before-define": ["error", {"functions": false, "classes": false, "variables": false}],
    'no-console': 0,
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "react/prop-types": "off"
  },
  ignorePatterns: ['cypress', 'cypress.config.js', '.eslintrc.cjs', 'dist']
};
