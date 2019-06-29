import { RuleTester } from 'eslint';
import rule, {
  REACTSUBCOMPONENTS_ERROR,
  RENDERSUBCOMPONENT_RETURN_ERROR
} from '../../../src/react16-instances';

const accessError = [{ message: REACTSUBCOMPONENTS_ERROR }];
const instanceError = [{ message: RENDERSUBCOMPONENT_RETURN_ERROR }];

const ruleTester = new RuleTester();
ruleTester.run('react16-instances: reactSubComponents', rule, {
  valid: [{ code: 'reactSubComponents;' }, { code: 'view.reactSubComponent;' }],
  invalid: [
    { code: 'view.reactSubComponents;', errors: accessError },
    { code: 'view.reactSubComponents.map(callback);', errors: accessError },
    { code: 'view.reactSubComponents[0];', errors: accessError }
  ]
});

ruleTester.run('react16-instances: renderSubComponent return value', rule, {
  valid: [
    { code: 'some = thing()' },
    { code: 'outer(thing())' },
    { code: 'thing().member' },
    { code: 'thing().memberFunction' },
    { code: 'view.renderSubComponent(something);' },
    { code: 'long.chain().view.renderSubComponent(something);' },
    { code: 'renderSubComponent(something);' },
    { code: 'reference = view.renderSubComponent;' },
    {
      code: '() => { thing(); };',
      env: { es6: true }
    },
    {
      code: '() => { view.renderSubComponent(something); };',
      env: { es6: true }
    }
  ],
  invalid: [
    {
      code: 'instance = renderSubComponent(something);',
      errors: instanceError
    },
    {
      code: 'instance = view.renderSubComponent(something);',
      errors: instanceError
    },
    {
      code: 'view.instance = view.renderSubComponent(something);',
      errors: instanceError
    },
    {
      code: 'view.instance = renderSubComponent(something);',
      errors: instanceError
    },
    {
      code: 'someFunction(view.renderSubComponent(something));',
      errors: instanceError
    },
    {
      code: 'view.renderSubComponent(something).someMember;',
      errors: instanceError
    },
    {
      code: 'view.renderSubComponent(something).someMember();',
      errors: instanceError
    },
    {
      code: '() => view.renderSubComponent(something);',
      env: { es6: true },
      errors: instanceError
    },
    {
      code: '() => { return view.renderSubComponent(something); };',
      env: { es6: true },
      errors: instanceError
    }
  ]
});
