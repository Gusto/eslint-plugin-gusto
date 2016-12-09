module.exports = {
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6
  },

  rules: {
    // Possible Errors
    // The following rules point out areas where you might have made mistakes.

    // disallow unnecessary parentheses
    'no-extra-parens': ['error', 'functions'],
    // disallow use of Object.prototypes builtins directly
    'no-prototype-builtins': 'error',
    // Disallow template literal placeholder syntax in regular strings
    // http://eslint.org/docs/rules/no-template-curly-in-string
    'no-template-curly-in-string': 'error',
    // disallow return/throw/break/continue inside finally blocks
    'no-unsafe-finally': 'error',
    // Ensure JSDoc comments are valid
    'valid-jsdoc': 'off',

    // Best Practices
    // These are rules designed to prevent you from making mistakes. They either prescribe a better
    // way of doing something or help you avoid footguns.

    // enforces getter/setter pairs in objects
    'accessor-pairs': 'off',
    // enforce return statements in callbacks of array's methods
    'array-callback-return': 'error',
    // treat var statements as if they were block scoped
    'block-scoped-var': 'error',
    // specify the maximum cyclomatic complexity allowed in a program
    complexity: 'off',
    // enforce that class methods use "this"
    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': ['off', {
      exceptMethods: [],
    }],
    // require return statements to either always or never specify values
    'consistent-return': 'off',
    // specify curly brace conventions for all control statements
    curly: 'error',
    // require default case in switch statements
    'default-case': 'error',
    // enforces consistent newlines before or after dots
    'dot-location': 'off',
    // encourages use of dot notation whenever possible
    'dot-notation': 'error',
    // require the use of === and !==
    eqeqeq: 'error',
    // make sure for-in loops have an if statement
    'guard-for-in': 'off',
    // disallow the use of alert, confirm, and prompt
    'no-alert': 'error',
    // disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 'error',
    // disallow else after a return in an if
    'no-else-return': 'off',
    // disallow use of empty functions
    'no-empty-function': 'off',
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 'error',
    // disallow use of eval()
    'no-eval': 'error',
    // disallow adding to native types
    'no-extend-native': 'error',
    // disallow unnecessary function binding
    'no-extra-bind': 'error',
    // disallow unnecessary labels
    'no-extra-label': 'error',
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',
    // disallow reassignments of native objects or read-only globals
    // http://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ['error', { exceptions: [] }],
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': 'off',
    // disallow var and named functions in global scope
    'no-implicit-globals': 'error',
    // disallow use of eval()-like methods
    'no-implied-eval': 'error',
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'off',
    // disallow usage of __iterator__ property
    'no-iterator': 'error',
    // disallow use of labeled statements
    'no-labels': 'error',
    // disallow unnecessary nested blocks
    'no-lone-blocks': 'error',
    // disallow creation of functions within loops
    'no-loop-func': 'error',
    // disallow the use of magic numbers
    'no-magic-numbers': 'off',
    // disallow use of multiple spaces
    'no-multi-spaces': 'off',
    // disallow use of multiline strings
    'no-multi-str': 'error',
    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 'error',
    // disallow use of new operator for Function object
    'no-new-func': 'error',
    // disallows creating new instances of String,Number, and Boolean
    'no-new-wrappers': 'error',
    // disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
    'no-octal-escape': 'error',
    // disallow reassignment of function parameters
    'no-param-reassign': 'off',
    // disallow usage of __proto__ property
    'no-proto': 'error',
    // disallow certain object properties
    // http://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated,'
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }],
    // disallow use of assignment in return statement
    'no-return-assign': 'off',
    // disallow redundant `return await`
    'no-return-await': 'error',
    // disallow use of javascript: urls.
    'no-script-url': 'off',
    // disallow self assignment
    // http://eslint.org/docs/rules/no-self-assign
    'no-self-assign': 'error',
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',
    // disallow use of comma operator
    'no-sequences': 'error',
    // restrict what can be thrown as an exception
    'no-throw-literal': 'error',
    // disallow unmodified conditions of loops
    'no-unmodified-loop-condition': 'error',
    // disallow usage of expressions in statement position
    'no-unused-expressions': 'off',
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 'off',
    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 'error',
    // disallow unnecessary string escaping
    'no-useless-escape': 'error',
    // disallow redundant return; keywords
    // http://eslint.org/docs/rules/no-useless-return
    'no-useless-return': 'error',
    // disallow use of void operator
    'no-void': 'error',
    // disallow usage of configurable warning terms in comments - e.g. TODO or FIXME
    'no-warning-comments': 'off',
    // disallow use of the with statement
    'no-with': 'error',
    // require use of the second argument for parseInt()
    radix: 'error',
    // require `await` in `async function`
    // http://eslint.org/docs/rules/require-await
    'require-await': 'off',
    // requires to declare all vars on top of their containing scope, covered by let/const
    'vars-on-top': 'off',
    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: false }],
    // require or disallow Yoda conditions
    yoda: 'error',

    // Strict Mode
    // These rules relate to using strict mode.

    // require or disallow the 'use strict' pragma in the global scope (off by default in the node environment)
    strict: ['error', 'never'],

    // Variables
    // These rules have to do with variable declarations.

    // enforce or disallow variable initializations at definition
    'init-declarations': 'off',
    // disallow the catch clause parameter name being the same as a variable in the outer scope
    // (off by default in the node environment)
    'no-catch-shadow': 'off',
    // disallow labels that share a name with a variable
    'no-label-var': 'error',
    // restrict usage of specified global variables
    'no-restricted-globals': 'error',
    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 'error',
    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'error',
    // disallow use of undefined when initializing variables
    'no-undef-init': 'error',
    // disallow use of undefined variable
    'no-undefined': 'off',
    // disallow use of variables before they are defined
    'no-use-before-define': 'error',

    // Node.js
    // These rules are specific to JavaScript running on Node.js.

    // enforce return after a callback
    'callback-return': 'off',
    // enforces error handling in callbacks (on by default in the node environment)
    'handle-callback-err': 'off',
    // disallow mixing regular variable and require declarations (on by default in the node environment)
    'no-mixed-requires': 'off',
    // disallow use of new operator with the require function (on by default in the node environment)
    'no-new-require': 'off',
    // disallow string concatenation with __dirname and __filename (on by default in the node environment)
    'no-path-concat': 'off',
    // disallow process.exit() (on by default in the node environment)
    'no-process-exit': 'off',
    // restrict usage of specified node modules
    'no-restricted-modules': 'off',
    // disallow use of synchronous methods
    'no-sync': 'off',

    // Stylistic Issues
    // These rules are purely matters of style and are quite subjective.

    // enforce spacing inside array brackets
    'array-bracket-spacing': ['off', 'never'],
    // disallow or enforce spaces inside of single line blocks
    'block-spacing': 'error',
    // enforce one true brace style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // require camel case names
    camelcase: ['error', { properties: 'never' }],
    // enforce or disallow capitalization of the first letter of a comment
    // http://eslint.org/docs/rules/capitalized-comments
    'capitalized-comments': ['off', 'never', {
      line: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    }],
    // enforce spacing before and after comma
    'comma-spacing': ['error', { before: false, after: true }],
    // enforce one true comma style
    'comma-style': ['error', 'last'],
    // disallow padding inside computed properties
    'computed-property-spacing': ['error', 'never'],
    // enforces consistent naming when capturing the current execution context
    'consistent-this': 'off',
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 'error',
    // enforce spacing between functions and their invocations
    // http://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],
    // requires function names to match the name of the variable or property to which they are
    // assigned
    // http://eslint.org/docs/rules/func-name-matching
    'func-name-matching': ['off', { includeCommonJSModuleExports: false }],
    // require function expressions to have a name
    'func-names': 'off',
    // enforces use of function declarations or expressions
    'func-style': 'off',
    // blacklist certain identifiers to prevent them being used
    'id-blacklist': 'off',
    // enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': 'off',
    // require identifiers to match the provided regular expression
    'id-match': 'off',
    // specify tab or space width for your code
    indent: ['error', 2],
    // enforce spacing between keys and values in object literal properties
    'key-spacing': 'off',
    // enforce spacing before and after keywords
    'keyword-spacing': 'error',
    // enforce position of line comments
    // http://eslint.org/docs/rules/line-comment-position
    // TODO: enable?
    'line-comment-position': ['off', {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    }],
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': ['error', 'unix'],
    // enforces empty lines around comments
    'lines-around-comment': 'off',
    // require or disallow newlines around directives
    // http://eslint.org/docs/rules/lines-around-directive
    'lines-around-directive': ['error', {
      before: 'always',
      after: 'always',
    }],
    // specify the maximum depth that blocks can be nested
    'max-depth': ['off', 5],
    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 'off',
    // specify the number of parameters that can be used in the function declaration
    'max-params': 'off',
    // specify the maximum number of statement allowed in a function
    'max-statements': 'off',
    // specify the maximum number of statements allowed per line
    'max-statements-per-line': 'off',

    // require multiline ternary
    // http://eslint.org/docs/rules/multiline-ternary
    // TODO: enable?
    'multiline-ternary': ['off', 'never'],

    // require a capital letter for constructors
    'new-cap': ['error', {
      newIsCap: true,
      capIsNewExceptions: []
    }],
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 'error',
    // allow/disallow an empty newline after var statement
    'newline-after-var': 'off',
    // require newline before return statement
    'newline-before-return': 'off',
    // enforce newline after each call when chaining the calls
    'newline-per-chained-call': 'off',
    // disallow use of the Array constructor
    'no-array-constructor': 'error',
    // disallow use of bitwise operators
    'no-bitwise': 'off',
    // disallow use of the continue statement
    'no-continue': 'off',
    // disallow comments inline after code
    'no-inline-comments': 'off',
    // disallow if as the only statement in an else block
    // http://eslint.org/docs/rules/no-lonely-if
    'no-lonely-if': 'error',
    // disallow un-paren'd mixes of different operators
    'no-mixed-operators': ['error', {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],
    // disallow multiple empty lines
    'no-multiple-empty-lines': 'off',
    // disallow negated conditions
    'no-negated-condition': 'off',
    // disallow nested ternary expressions
    'no-nested-ternary': 'off',
    // disallow use of the Object constructor
    'no-new-object': 'error',
    // disallow use of unary operators, ++ and --
    'no-plusplus': 'off',
    // disallow use of certain syntax in code
    'no-restricted-syntax': 'off',
    // disallow tab characters entirely
    'no-tabs': 'error',
    // disallow the use of ternary operators
    'no-ternary': 'off',
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 'off',
    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    // disallow whitespace before properties
    'no-whitespace-before-property': 'error',
    // require padding inside curly braces
    'object-curly-spacing': ['off', 'always'],
    // enforce line breaks between braces
    // TODO: enable once https://github.com/eslint/eslint/issues/6488 is resolved
    'object-curly-newline': ['off', {
      ObjectExpression: { minProperties: 0, multiline: true },
      ObjectPattern: { minProperties: 0, multiline: true }
    }],
    // enforce "same line" or "multiple line" on object properties.
    'object-property-newline': ['off', {
      allowMultiplePropertiesPerLine: true
    }],
    // allow just one var statement per function
    'one-var': ['error', 'never'],
    // require a newline around variable declaration
    'one-var-declaration-per-line': ['error', 'always'],
    // require assignment operator shorthand where possible or prohibit it entirely
    // http://eslint.org/docs/rules/operator-assignment
    'operator-assignment': ['error', 'always'],
    // enforce operators to be placed before or after line breaks
    'operator-linebreak': 'off',
    // enforce padding within blocks
    'padded-blocks': ['error', 'never'],
    // require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props.html
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
    // specify whether double or single quotes should be used
    quotes: ['error', 'single', 'avoid-escape'],
    // Require JSDoc comment
    'require-jsdoc': 'off',
    // require or disallow use of semicolons instead of ASI
    semi: ['error', 'always'],
    // disallow space before semicolon
    'semi-spacing': ['error', {before: false, after: true}],
    // requires object keys to be sorted
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],
    // sort variables within the same declaration block
    'sort-vars': 'off',
    // require or disallow a space before blocks
    'space-before-blocks': 'error',
    // require or disallow space before function opening parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    // require or disallow spaces inside parentheses
    'space-in-parens': ['error', 'never'],
    // require spaces around operators
    'space-infix-ops': 'error',
    // require a space around word operators such as typeof
    'space-unary-ops': 'error',
    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': 'off',
    // require regex literals to be wrapped in parentheses
    'wrap-regex': 'off',

    // ECMAScript 6
    // These rules are only relevant to ES6 environments.

    // enforces no braces where they can be omitted
    // http://eslint.org/docs/rules/arrow-body-style
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],
    // require parens in arrow function arguments
    'arrow-parens': 'off',
    // require space before/after arrow function's arrow
    'arrow-spacing': 'error',
    // enforce the spacing around the * in generator functions
    'generator-star-spacing': 'off',
    // disallow arrow functions where they could be confused with comparisons
    // http://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],
    // disallow importing from the same path more than once
    'no-duplicate-imports': 'error',
    // restrict usage of specified node imports
    'no-restricted-imports': 'off',
    // disallow useless computed property keys
    'no-useless-computed-key': 'error',
    // disallow unnecessary constructor
    'no-useless-constructor': 'error',
    // disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': ['off', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false
    }],
    'no-var': 'error',
    'object-shorthand': 'off',
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 'off',
    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],
    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // http://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',
    // suggest using Reflect methods where applicable
    'prefer-reflect': 'off',
    // suggest using the rest parameters instead of arguments
    'prefer-rest-params': 'error',
    // suggest using the spread operator instead of .apply()
    // http://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',
    // suggest using template literals instead of strings concatenation
    'prefer-template': 'error',
    // disallow generator functions that do not have yield
    'require-yield': 'off',
    // enforce spacing between object rest-spread
    'rest-spread-spacing': ['error', 'never'],
    // sort import declarations within module
    'sort-imports': 'off',
    // require a Symbol description
    // http://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',
    // enforce spacing around embedded expressions of template strings
    'template-curly-spacing': 'off',
    // enforce spacing around the * in yield* expressions
    'yield-star-spacing': 'off'
  }
};
