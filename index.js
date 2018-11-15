module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  parser: 'babel-eslint',
  env: {
    es6: true,
  },

  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/{spec,test}/**', '**/*_spec.{js,jsx}', '**/webpack.config.js'],
        optionalDependencies: false,
      },
    ],
    // rule deprecated in favor of jsx-a11y/label-has-associated-control
    'jsx-a11y/label-has-for': false,
    'react/destructuring-assignment': false,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      version: '15.5.4',
    },
  },
};
