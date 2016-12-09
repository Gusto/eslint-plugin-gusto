module.exports = {
  plugins: [
    'react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      pragma: 'React',  // Pragma to use, default to "React"
      version: '0.13.3' // React version, default to the latest React stable release
    }
  },
  rules: {
    // React

    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': ['error', 'prefer-single'],
    // Prevent missing displayName in a React component definition
    'react/display-name': 'off',
    // Forbid certain propTypes (any, array, object)
    'react/forbid-prop-types': ['off', { forbid: ['any', 'array', 'object'] }],
    // Prevent usage of dangerous JSX properties
    'react/no-danger': 'off',
    // Prevent usage of deprecated methods
    'react/no-deprecated': ['off'],
    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': ['error'],
    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': ['error'],
    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 'error',
    // Prevent usage of isMounted
    'react/no-is-mounted': 'error',
    // Prevent multiple component definition per file
    'react/no-multi-comp': 'off',
    // Prevent usage of setState
    'react/no-set-state': 'off',
    // Prevent using string references
    'react/no-string-refs': 'off',
    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 'error',
    // Require ES6 class declarations over React.createClass
    'react/prefer-es6-class': ['off', 'always'],
    // Require stateless functions when not using lifecycle methods, setState or ref
    'react/prefer-stateless-function': 'off',
    // Prevent missing props validation in a React component definition
    'react/prop-types': ['error', { ignore: [], customValidators: [] }],
    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 'error',
    // Enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 'error',
    // Prevent extra closing tags for components without children
    'react/self-closing-comp': 'error',
    // Enforce component methods order
    'react/sort-comp': 'off',
    // Enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': 'off',
    // Prevent missing parentheses around multilines JSX
    'react/jsx-wrap-multilines': ['error', {
      declaration: true,
      assignment: true,
      return: true
    }],
    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': 'off',
    // Validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': 'off',
    // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': 'off',
    // Enforce or disallow spaces around equal signs in JSX attributes
    'react/jsx-equals-spacing': ['error', 'never'],
    // Require that the first prop in a JSX element be on a new line when the element is multiline
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': 'off',
    // Validate props indentation in JSX
    'react/jsx-indent-props': ['error', 2],
    // Validate JSX indentation
    'react/jsx-indent': ['error', 2],
    // Validate JSX has key prop when in array or iterator
    'react/jsx-key': 'error',
    // Limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': 'off',
    // Prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-bind': 'off',
    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': 'error',
    // Prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': 'off',
    // disallow target="_blank" on links
    // TODO: enable
    'react/jsx-no-target-blank': 'off',
    // only .jsx files may have JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
    // prevent accidental JS comments from being injected into JSX as text
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    'react/jsx-no-comment-textnodes': 'error',
    // disallow using React.render/ReactDOM.render's return value
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    'react/no-render-return-value': 'off',
    // require a shouldComponentUpdate method, or PureRenderMixin
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
    'react/require-optimization': ['off', { allowDecorators: [] }],
    // warn against using findDOMNode()
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    'react/no-find-dom-node': 'off',
    // Forbid certain props on Components
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    'react/forbid-component-props': ['off', { forbid: [] }],
    // Prevent problem with children and props.dangerouslySetInnerHTML
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': 'error',
    // Prevent unused propType definitions
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    // TODO: Enable
    'react/no-unused-prop-types': ['off', {
      customValidators: [
      ],
      skipShapeProps: false,
    }],
    // Require style prop value be an object or var
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/style-prop-object': 'error',
    // Prevent invalid characters from appearing in markup
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': 'off',
    // Prevent passing of children as props
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
    'react/no-children-prop': 'error',
    // Validate whitespace in and around the JSX opening and closing brackets
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never'
    }],
    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 'error',
    // Enforce PascalCase for user-defined JSX components
    'react/jsx-pascal-case': 'error',
    // Enforce spaces before the closing bracket of self-closing JSX elements
    'react/jsx-space-before-closing': ['error', 'always'],
    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 'error',
    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 'error'
  }
};
