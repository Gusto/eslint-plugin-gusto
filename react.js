module.exports = {
  plugins: [
    'react'
  ],
  ecmaFeatures: {
    'jsx': true
  },
  rules: {
    // React

    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': [2, 'prefer-single'],
    // Prevent missing displayName in a React component definition
    'react/display-name': 0,
    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': 0,
    // Validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': 0,
    // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': 0,
    // Enforce or disallow spaces around equal signs in JSX attributes
    'react/jsx-equals-spacing': [0, 'never'],
    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': 0,
    // Validate props indentation in JSX
    'react/jsx-indent-props': [2, 2],
    // Validate JSX indentation
    'react/jsx-indent': [2, 2],
    // Validate JSX has key prop when in array or iterator
    'react/jsx-key': 2,
    // Prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-bind': 0,
    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': 2,
    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 2,
    // Enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    // Prevent usage of deprecated methods
    'react/no-deprecated': [0, {'react': '0.13.3'}],
    'react/no-did-mount-set-state': [2, 'allow-in-func'],
    'react/no-did-update-set-state': [2, 'allow-in-func'],
    // Prevent usage of isMounted
    'react/no-is-mounted': 2,
    'react/no-unknown-property': 2,
    'react/no-multi-comp': 0,
    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2,
    'react/wrap-multilines': 2
  }
};
