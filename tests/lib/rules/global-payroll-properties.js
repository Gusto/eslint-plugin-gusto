import rule from '../../../src/global-payroll-properties';
import {RuleTester} from 'eslint';

const options = [{
  exceptions: [
    'Store',
    'router'
  ]
}];

function literalProps(propChain) {
  return propChain.reduce((a, b) => `${a}['${b}']`, '');
}

function identifierProps(propChain) {
  return propChain.reduce((a, b) => `${a}.${b}`, '');
}

function codeExamples(expression) {
  return [
    `someFunc(${expression});`,
    `${expression} = 3;`,
    `var thing = new ${expression}({prop: 3});`,
    `func({model: ${expression}});`
  ];
}

function generateExamples(props) {
  return props.map(property => {
    property = property.split('.');
    return [
      {
        expr: `Payroll${identifierProps(property)}`,
        type: 'Identifier'
      },
      {
        expr: `Payroll${literalProps(property)}`,
        type: 'Literal'
      }
    ].map(({expr, type}) => codeExamples(expr).map(code => ({code, type, expr})))
     .reduce((a, b) => a.concat(b), []);
  }).reduce((a, b) => a.concat(b), []);
}

function generateValidExamples(props) {
  return generateExamples(props).map(({code}) => ({code, options}));
}

function generateInvalidExamples(props) {
  return generateExamples(props).map(({code, type, expr}) => (
    {
      code,
      options,
      errors: [{ message: `Must import/require Payroll property '${expr}'.`, type: type}]
    }
  ));
}

const ruleTester = new RuleTester();
ruleTester.run('global-payroll-properties', rule, {
  valid: generateValidExamples([
    'Store',
    'Store.company',
    'Store.company.id',
    'router'
  ]),
  invalid: generateInvalidExamples([
    'Models',
    'Collections.Things',
    'Views.SomeView'
  ])
});
