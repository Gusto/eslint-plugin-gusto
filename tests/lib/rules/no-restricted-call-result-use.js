import { RuleTester } from 'eslint';
import rule from '../../../src/no-restricted-call-result-use';

const fetchError = [
  {
    message: `The result returned by 'fetch' is restricted from being used.`
  }
];
const asyncThingError = [
  {
    message: `The result returned by 'asyncThing' is restricted from being used. Additional message.`
  }
];

const options = [
  'fetch',
  { name: 'asyncThing', message: 'Additional message.' }
];

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
    },
    {
      code: '() => thing();',
      options,
      env: { es6: true }
    }
  ],
  invalid: [
    // Assignment
    {
      code: 'instance = fetch(something);',
      options,
      errors: fetchError
    },
    {
      code: 'instance = asyncThing(something);',
      options,
      errors: asyncThingError
    },
    {
      code: 'instance = view.fetch(something);',
      options,
      errors: fetchError
    },
    {
      code: 'instance = long.chain().something.view.fetch(something);',
      options,
      errors: fetchError
    },
    {
      code: 'view.instance = view.fetch(something);',
      options,
      errors: fetchError
    },
    {
      code: 'view.instance = fetch(something);',
      options,
      errors: fetchError
    },
    // Call Expression Argument
    {
      code: 'someFunction(view.fetch(something));',
      options,
      errors: fetchError
    },
    // Member Access
    {
      code: 'view.fetch(something).someMember;',
      options,
      errors: fetchError
    },
    {
      code: 'const {someMember} = view.fetch(something);',
      env: { es6: true },
      options,
      errors: fetchError
    },
    {
      code: 'view.fetch(something).someMember();',
      options,
      errors: fetchError
    },
    // Returned
    {
      code: '() => view.fetch(something);',
      env: { es6: true },
      options,
      errors: fetchError
    },
    {
      code: '() => { return view.fetch(something); };',
      env: { es6: true },
      options,
      errors: fetchError
    }
  ]
});
