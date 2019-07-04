import { RuleTester } from 'eslint';
import rule, {
  RENDERSUBCOMPONENT_RETURN_ERROR
} from '../../../src/no-restricted-call-result-use';

const instanceError = [{ message: RENDERSUBCOMPONENT_RETURN_ERROR }];

const options = ['fetch', 'asyncThing'];

const ruleTester = new RuleTester();
ruleTester.run('no-restricted-call-result-use', rule, {
  valid: [
    // allowed calls to restricted function
    { code: 'fetch(something);', options },
    { code: 'asyncThing(something);', options },
    { code: 'view.fetch(something);', options },
    { code: 'long.chain().view.fetch(something);', options },
    { code: 'reference = view.fetch;', options },
    {
      code: '() => { view.fetch(something); };',
      options,
      env: { es6: true }
    },

    // sanity checks (must filter by identifier)
    { code: 'some = thing()', options },
    { code: 'outer(thing())', options },
    { code: 'thing().member', options },
    { code: 'thing().memberFunction()', options },
    {
      code: '() => { thing(); };',
      options,
      env: { es6: true }
    }
  ],
  invalid: [
    // Assignment
    {
      code: 'instance = fetch(something);',
      options,
      errors: instanceError
    },
    {
      code: 'instance = asyncThing(something);',
      options,
      errors: instanceError
    },
    {
      code: 'instance = view.fetch(something);',
      options,
      errors: instanceError
    },
    {
      code: 'instance = long.chain().something.view.fetch(something);',
      options,
      errors: instanceError
    },
    {
      code: 'view.instance = view.fetch(something);',
      options,
      errors: instanceError
    },
    {
      code: 'view.instance = fetch(something);',
      options,
      errors: instanceError
    },
    // Call Expression Argument
    {
      code: 'someFunction(view.fetch(something));',
      options,
      errors: instanceError
    },
    // Member Access
    {
      code: 'view.fetch(something).someMember;',
      options,
      errors: instanceError
    },
    {
      code: 'view.fetch(something).someMember();',
      options,
      errors: instanceError
    },
    // Returned
    {
      code: '() => view.fetch(something);',
      env: { es6: true },
      options,
      errors: instanceError
    },
    {
      code: '() => { return view.fetch(something); };',
      env: { es6: true },
      options,
      errors: instanceError
    }
  ]
});
