import rule from '../../../src/no-dumb-quotes';
import { RuleTester } from 'eslint';

const ruleTester = new RuleTester();
const env = { es6: true }
const stringForTemplate = ''

ruleTester.run('no-dumb-quotes', rule, {
  valid: [
    {
      code: `var copy = "12 inches and 1' are equal"`,
    },
    {
      code: `var copy = 'A foot and 12" are equal'`,
    },
    {
      code: `const copy = 'Maybe I don’t have anything “interesting” to say'`,
      env,
    },
    {
      code: 'const value = "template literal"; const template = `This is a ${value} without dumb quotes`',
      env,
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
    {
      code: "const value = 'template literal'; const template = `This '${value}' has 'dumb' single quotes`",
      env,
      errors: [{ message: "Use an apostrophe (’) instead of a foot mark (')", type: 'TemplateLiteral' }],
    },
    {
      code: 'const value = "template literal"; const template = `This "${value}" has "dumb" single quotes`',
      env,
      errors: [{ message: 'Use quotes (“…”) instead of inch marks ("…")', type: 'TemplateLiteral' }],
    },
    {
      code: 'const value = "template literal"; const template = `This \'${value}\' has both types of "dumb" quotes`',
      env,
      errors: [
        { message: "Use an apostrophe (’) instead of a foot mark (')", type: 'TemplateLiteral' },
        { message: 'Use quotes (“…”) instead of inch marks ("…")', type: 'TemplateLiteral' },
      ],
    },
  ]
});
