import rule from '../../../src/no-dumb-quotes';
import { RuleTester } from 'eslint';

const ruleTester = new RuleTester();

ruleTester.run('no-dumb-quotes', rule, {
  valid: [
    {
      code: `var copy = "12 inches and 1' are equal"`,
    },
    {
      code: `var copy = 'A foot and 12" are equal'`,
    },
    {
      code: `var copy = 'Maybe I don’t have anything “interesting” to say'`,
    },
  ],
  invalid: [
    {
      code: `var copy = "Maybe I don't"`,
      errors: [{ message: "Use an apostrophe (’) instead of a foot mark (')", type: 'Literal' }],
    },
    {
      code: `var copy = 'have anything "interesting" to say'`,
      errors: [{ message: 'Use quotes (“…”) instead of inch marks ("…")', type: 'Literal' }],
    },
  ]
});
