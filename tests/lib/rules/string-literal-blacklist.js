import rule from '../../../src/string-literal-blacklist';
import {RuleTester} from 'eslint';

const options = [
  '$image_path(',
  'somethingelse'
];

const ruleTester = new RuleTester();
ruleTester.run('string-literal-blacklist', rule, {
  valid: [
    {
      code: `const img = <img src='$image_path' />;`,
      options,
      env: {
        es6: true
      },
      ecmaFeatures: {
        jsx: true
      }
    },
    {
      code: `const img = <img src="$image_path" />;`,
      options,
      env: {
        es6: true
      },
      ecmaFeatures: {
        jsx: true
      }
    },
    {
      code: `const src = '$image_path';`,
      options,
      env: {
        es6: true
      }
    },
    {
      code: `const src = "$image_path";`,
      options,
      env: {
        es6: true
      }
    },
    {
      code: `const src = \`$image_path\`;`,
      options,
      env: {
        es6: true
      }
    },
    {
      code: `const img = <img src='somethingels' />;`,
      options,
      env: {
        es6: true
      },
      ecmaFeatures: {
        jsx: true
      }
    },
    {
      code: `const img = <img src="somethingels" />;`,
      options,
      env: {
        es6: true
      },
      ecmaFeatures: {
        jsx: true
      }
    },
    {
      code: `const src = 'somethingels';`,
      options,
      env: {
        es6: true
      }
    },
    {
      code: `const src = "somethingels";`,
      options,
      env: {
        es6: true
      }
    },
    {
      code: `const src = \`somethingels\`;`,
      options,
      env: {
        es6: true
      }
    }
  ],
  invalid: [
    {
      code: `const img = <img src='$image_path(some/where/thing.png)' />;`,
      options,
      env: {
        es6: true
      },
      ecmaFeatures: {
        jsx: true
      },
      errors: [{ message: "String literal '$image_path(' is blacklisted", type: 'Literal' }]
    },
    {
      code: `const img = <img src="$image_path(some/where/thing.png)" />;`,
      options,
      env: {
        es6: true
      },
      ecmaFeatures: {
        jsx: true
      },
      errors: [{ message: "String literal '$image_path(' is blacklisted", type: 'Literal' }]
    },
    {
      code: `const img = <img src={\`$image_path(some/where/thing.png)\`} />;`,
      options,
      env: {
        es6: true
      },
      ecmaFeatures: {
        jsx: true
      },
      errors: [{ message: "String literal '$image_path(' is blacklisted", type: 'TemplateLiteral' }]
    },
    {
      code: `const src = '$image_path(some/where/thing.png)';`,
      options,
      env: {
        es6: true
      },
      errors: [{ message: "String literal '$image_path(' is blacklisted", type: 'Literal' }]
    },
    {
      code: `const src = "$image_path(some/where/thing.png)";`,
      options,
      env: {
        es6: true
      },
      errors: [{ message: "String literal '$image_path(' is blacklisted", type: 'Literal' }]
    },
    {
      code: `const src = \`$image_path(some/where/thing.png)\`;`,
      options,
      env: {
        es6: true
      },
      errors: [{ message: "String literal '$image_path(' is blacklisted", type: 'TemplateLiteral' }]
    },
    {
      code: `const img = <img src='somethingelse altogether' />;`,
      options,
      env: {
        es6: true
      },
      ecmaFeatures: {
        jsx: true
      },
      errors: [{ message: "String literal 'somethingelse' is blacklisted", type: 'Literal' }]
    },
    {
      code: `const img = <img src="somethingelse altogether" />;`,
      options,
      env: {
        es6: true
      },
      ecmaFeatures: {
        jsx: true
      },
      errors: [{ message: "String literal 'somethingelse' is blacklisted", type: 'Literal' }]
    },
    {
      code: `const img = <img src={\`somethingelse altogether\`} />;`,
      options,
      env: {
        es6: true
      },
      ecmaFeatures: {
        jsx: true
      },
      errors: [{ message: "String literal 'somethingelse' is blacklisted", type: 'TemplateLiteral' }]
    },
    {
      code: `const src = 'somethingelse altogether';`,
      options,
      env: {
        es6: true
      },
      errors: [{ message: "String literal 'somethingelse' is blacklisted", type: 'Literal' }]
    },
    {
      code: `const src = "somethingelse altogether";`,
      options,
      env: {
        es6: true
      },
      errors: [{ message: "String literal 'somethingelse' is blacklisted", type: 'Literal' }]
    },
    {
      code: `const src = \`somethingelse altogether\`;`,
      options,
      env: {
        es6: true
      },
      errors: [{ message: "String literal 'somethingelse' is blacklisted", type: 'TemplateLiteral' }]
    }
  ]
});
