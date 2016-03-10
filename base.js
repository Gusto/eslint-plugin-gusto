module.exports = {
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  env: {
    'es6': true
  },
  rules: {
    // Possible Errors
    // The following rules point out areas where you might have made mistakes.

    // disallow unnecessary parentheses
    'no-extra-parens': [2, 'functions'],
    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 2,
    // Ensure JSDoc comments are valid
    'valid-jsdoc': 0,

    // Best Practices
    // These are rules designed to prevent you from making mistakes. They either prescribe a better
    // way of doing something or help you avoid footguns.

    // treat var statements as if they were block scoped
    'block-scoped-var': 2,
    // specify the maximum cyclomatic complexity allowed in a program
    'complexity': 0,
    // require return statements to either always or never specify values
    'consistent-return': 2,
    // specify curly brace conventions for all control statements
    'curly': 2,
    // require default case in switch statements
    'default-case': 2,
    // encourages use of dot notation whenever possible
    'dot-notation': 2,
    // require the use of === and !==
    'eqeqeq': 2,
    // make sure for-in loops have an if statement
    'guard-for-in': 0,
    // disallow the use of alert, confirm, and prompt
    'no-alert': 2,
    // disallow use of arguments.caller or arguments.callee
    'no-caller': 2,
    // disallow lexical declarations in case clauses
    'no-case-declarations': 2,
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 2,
    // disallow else after a return in an if
    'no-else-return': 0,
    // disallow use of labels for anything other then loops and switches
    'no-empty-label': 2,
    // disallow use of empty destructuring patterns
    'no-empty-pattern': 2,
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 2,
    // disallow use of eval()
    'no-eval': 2,
    // disallow adding to native types
    'no-extend-native': 2,
    // disallow unnecessary function binding
    'no-extra-bind': 2,
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 2,
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': 0,
    // disallow use of eval()-like methods
    'no-implied-eval': 2,
    // disallow use of labeled statements
    'no-labels': 2,
    // disallow usage of __iterator__ property
    'no-iterator': 2,
    // disallow unnecessary nested blocks
    'no-lone-blocks': 2,
    // disallow creation of functions within loops
    'no-loop-func': 2,
    // disallow the use of magic numbers
    'no-magic-numbers': 0,
    // disallow use of multiple spaces
    'no-multi-spaces': 0,
    // disallow use of multiline strings
    'no-multi-str': 2,
    // disallow reassignments of native objects
    'no-native-reassign': 2,
    // disallow use of new operator for Function object
    'no-new-func': 2,
    // disallows creating new instances of String,Number, and Boolean
    'no-new-wrappers': 2,
    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 2,
    // disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
    'no-octal-escape': 2,
    // disallow reassignment of function parameters
    'no-param-reassign': 0,
    // disallow usage of __proto__ property
    'no-proto': 2,
    // disallow use of assignment in return statement
    'no-return-assign': 2,
    // disallow use of javascript: urls.
    'no-script-url': 0,
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 2,
    // disallow use of comma operator
    'no-sequences': 2,
    // restrict what can be thrown as an exception
    'no-throw-literal': 2,
    // disallow usage of expressions in statement position
    'no-unused-expressions': 0,
    // disallow use of void operator
    'no-void': 2,
    // disallow usage of configurable warning terms in comments - e.g. TODO or FIXME
    'no-warning-comments': 0,
    // disallow use of the with statement
    'no-with': 2,
    // require use of the second argument for parseInt()
    'radix': 2,
    // requires to declare all vars on top of their containing scope, covered by let/const
    'vars-on-top': 0,
    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife': [2, 'any'],
    // require or disallow Yoda conditions
    'yoda': 0,

    // Strict Mode
    // These rules relate to using strict mode.

    // require or disallow the 'use strict' pragma in the global scope (off by default in the node environment)
    'strict': [2, 'never'],

    // Variables
    // These rules have to do with variable declarations.

    // enforce or disallow variable initializations at definition
    'init-declarations': 0,
    // disallow the catch clause parameter name being the same as a variable in the outer scope
    // (off by default in the node environment)
    'no-catch-shadow': 0,
    // disallow labels that share a name with a variable
    'no-label-var': 2,
    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 2,
    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 2,
    // disallow use of undefined variable
    'no-undefined': 0,
    // disallow use of undefined when initializing variables
    'no-undef-init': 2,
    // disallow use of variables before they are defined
    'no-use-before-define': 2,

    // Node.js
    // These rules are specific to JavaScript running on Node.js.

    // enforce return after a callback
    'callback-return': 0,
    // enforces error handling in callbacks (on by default in the node environment)
    'handle-callback-err': 0,
    // disallow mixing regular variable and require declarations (on by default in the node environment)
    'no-mixed-requires': 0,
    // disallow use of new operator with the require function (on by default in the node environment)
    'no-new-require': 0,
    // disallow string concatenation with __dirname and __filename (on by default in the node environment)
    'no-path-concat': 0,
    // disallow process.exit() (on by default in the node environment)
    'no-process-exit': 0,
    // restrict usage of specified node modules
    'no-restricted-modules': 0,
    // disallow use of synchronous methods
    'no-sync': 0,

    // Stylistic Issues
    // These rules are purely matters of style and are quite subjective.

    // enforce one true brace style
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    // enforce spacing before and after comma
    'comma-spacing': [2, { 'before': false, 'after': true }],
    // enforce one true comma style
    'comma-style': [2, 'last'],
    // specify tab or space width for your code
    'indent': [2, 2],
    'key-spacing': 0,
    // require camel case names
    'camelcase': [2, {'properties': 'never'}],
    // enforces consistent naming when capturing the current execution context
    'consistent-this': 0,
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 2,
    // require function expressions to have a name
    'func-names': 0,
    // enforces use of function declarations or expressions
    'func-style': 0,
    // require a capital letter for constructors
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNewExceptions': []
    }],
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 2,
    // disallow nested ternary expressions
    'no-nested-ternary': 0,
    // disallow negated conditions
    'no-negated-condition': 0,
    // disallow use of the Array constructor
    'no-array-constructor': 2,
    // disallow if as the only statement in an else block
    'no-lonely-if': 0,
    // disallow use of the Object constructor
    'no-new-object': 2,
    // disallow space between function identifier and application
    'no-spaced-func': 2,
    // disallow use of certain syntax in code
    'no-restricted-syntax': 0,
    // disallow the use of ternary operators
    'no-ternary': 0,
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 0,
    // disallow multiple empty lines
    'no-multiple-empty-lines': 0,
    // allow just one var statement per function
    'one-var': [2, 'never'],
    // enforce padding within blocks
    'padded-blocks': 0,
    // specify whether double or single quotes should be used
    'quotes': [2, 'single', 'avoid-escape'],
    // require quotes around object literal property names
    'quote-props': 0,
    // Require JSDoc comment
    'require-jsdoc': 0,
    // require or disallow use of semicolons instead of ASI
    'semi': [2, 'always'],
    // disallow space before semicolon
    'semi-spacing': [2, {'before': false, 'after': true}],
    // sort variables within the same declaration block
    'sort-vars': 0,
    // require a space after certain keywords
    'space-after-keywords': 2,
    // require or disallow a space before blocks (fixable)
    'space-before-keywords': 2,
    // require or disallow a space before blocks
    'space-before-blocks': 2,
    // require or disallow a space before function opening parenthesis
    'space-before-function-paren': [2, 'never'],
    // require or disallow spaces inside parentheses
    'space-in-parens': 0,
    // require spaces around operators
    'space-infix-ops': 2,
    // require a space after return, throw, and case
    'space-return-throw-case': 2,
    // require a space around word operators such as typeof
    'space-unary-ops': 2,
    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': 0,
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 0,
    // require regex literals to be wrapped in parentheses
    'wrap-regex': 0,

    // ECMAScript 6
    // These rules are only relevant to ES6 environments.

    // require braces in arrow function body
    'arrow-body-style': [0, 'as-needed'],
    'constructor-super': 2,
    // disallow arrow functions where a condition is expected
    'no-arrow-condition': 2,
    // require space before/after arrow function's arrow
    'arrow-spacing': 2,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-this-before-super': 2,
    'no-var': 2,
    'object-shorthand': 0,
    'prefer-const': 2,
    'prefer-template': 2,

    // Legacy
    // The following rules are included for compatibility with JSHint and JSLint. While the names
    // of the rules may not match up with the JSHint/JSLint counterpart, the functionality is the same.

    'max-len': [2, 120] // specify the maximum length of a line in your program
  }
};
