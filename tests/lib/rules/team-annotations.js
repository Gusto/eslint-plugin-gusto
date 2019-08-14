import rule from '../../../src/team-annotations';
import { RuleTester } from 'eslint';

const options = [
  {
    missions: ['Mission'],
    teams: ['Team'],
  },
];

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});
ruleTester.run('team-annotations', rule, {
  valid: [
    {
      code: ['// @mission Mission', '// @team Team'].join('\n'),
      options,
      env: {
        es6: true,
      },
      ecmaFeatures: {
        jsx: true,
      },
    },
  ],
  invalid: [
    {
      code: ['// @mission Mission'].join('\n'),
      options,
      env: {
        es6: true,
      },
      ecmaFeatures: {
        jsx: true,
      },
      errors: [
        {
          message:
            'A team annotation is required at the second line of the file (i.e. `// @team Owning Team`).',
        },
      ],
    },
    {
      code: ['', '// @team Team'].join('\n'),
      options,
      env: {
        es6: true,
      },
      ecmaFeatures: {
        jsx: true,
      },
      errors: [
        {
          message:
            'A mission annotation is required at the top of the file (i.e. `// @mission Owning Mission`).',
        },
      ],
    },
    {
      code: ['function print1() { console.log(1); }'].join('\n'),
      options,
      env: {
        es6: true,
      },
      ecmaFeatures: {
        jsx: true,
      },
      errors: [
        {
          message:
            'A mission annotation is required at the top of the file (i.e. `// @mission Owning Mission`).',
        },
        {
          message:
            'A team annotation is required at the second line of the file (i.e. `// @team Owning Team`).',
        },
      ],
    },
  ],
});
