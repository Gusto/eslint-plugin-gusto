// const fullProperty = context.getSourceCode().getText(node);

export const RENDERSUBCOMPONENT_RETURN_ERROR = `Using the instance returned by renderSubComponent
  is deprecated because it will break in React 16. If you need to read the state use callback props
  instead.`;

export default function(context) {
  const restrictedCallReturns = context.options;

  if (restrictedCallReturns.length === 0) {
    return {};
  }

  const restrictedCallReturnsMap = new Map();

  restrictedCallReturns.forEach(callName => {
    restrictedCallReturnsMap.set(callName, {});
  });

  // minor TODO: var some = new forbidden() is not prohibited currently.
  // It is a "NewExpression" and not a "CallExpression"

  return {
    CallExpression: function(node) {
      // If the parent is an ExpressionStatement then the return value is not being used.
      // If it is anything else (I think) then the return value is being used. More testing may be
      // required.
      //
      // examples:
      // `dontUseMyReturn();`      OK!  [ExpressionStatement]
      // return dontUseMyReturn(); BAD! [ReturnStatement]
      if (node.parent.type === 'ExpressionStatement') {
        return;
      }

      // If the function being called is in the restrictedCallReturnsMap, report a problem.
      // The function name may be either stored at callee.name or callee.property.name.
      // myBadFunction() <== callee.name === 'myBadFunction'
      // something.myBadFunction <== callee.property.name === 'myBadFunction'
      const nameMatch = restrictedCallReturnsMap.get(node.callee.name);
      const propertyMatch =
        node.callee.property &&
        restrictedCallReturnsMap.get(node.callee.property.name);

      const anyMatch = nameMatch || propertyMatch;
      if (anyMatch) {
        context.report({
          node: node,
          message: RENDERSUBCOMPONENT_RETURN_ERROR
        });
      }
    }
  };
}

// This piece re-written as `'no-restricted-properties': ... { property: 'reactSubComponents' }`
// MemberExpression: function(node) {
//   const prop = node.property;
//   if (prop.type !== 'Identifier' || prop.name !== 'reactSubComponents') {
//     return;
//   }
//   context.report({
//     node: node.property,
//     message: `Accessing reactSubComponents is deprecated because it will break in React 16.
//       If you are writing a spec, spy on renderSubComponent instead.`
//   });
// },

// A BROKEN VERSION left as an example. It only finds assignments. It fails to find returns, member access, etc.
// AssignmentExpression: function(node) {
//   const right = node.right;
//   if (
//     right.type !== 'CallExpression' ||
//     right.callee.property.name !== 'renderSubComponent'
//   ) {
//     return;
//   }
//   context.report({
//     node: node,
//     message: RENDERSUBCOMPONENT_RETURN_ERROR
//   });
// }
