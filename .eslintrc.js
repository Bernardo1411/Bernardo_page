module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    // The rule below is aimed to avoid lint errors
    // when updating the state while using immer
    // under the hood in redux toolkit
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],

    // Remove rule from deafultProps as it will be deprecated in the future
    'react/require-default-props': ['error', {
      forbidDefaultForRequired: true,
      ignoreFunctionalComponents: true,
    }],
  },
};
