import rule from '../../../src/no-data-testid';
import { RuleTester } from 'eslint';

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    env: {
      es6: true
    },
  },
});

ruleTester.run('no-data-testid', rule, {
  valid: [
    {
      code: "const test = <div className='test'/>",
      ecmaFeatures: {
        jsx: true,
      },
      env: {
        es6: true
      },
    }
  ],
  invalid: [
    {
      code: "const test = <div data-testid='myid'/>",
      ecmaFeatures: {
        jsx: true,
      },
      env: {
        es6: true
      },
      errors: [
        {
          message: "Avoid using `data-testid` when possible. Try to test your component as a user would.",
        }
      ],
    }
  ],
});
