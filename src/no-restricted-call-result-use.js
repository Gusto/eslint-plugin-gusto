/**
 * @author Mark Wheeler
 */

export default function(context) {
  const restrictedCallReturns = context.options;

  if (restrictedCallReturns.length === 0) {
    return {};
  }

  const restrictedCallReturnsMap = new Map();

  restrictedCallReturns.forEach(callOption => {
    if (typeof callOption === 'string') {
      restrictedCallReturnsMap.set(
        callOption,
        `The result returned by '${callOption}' is restricted from being used.`,
      );
    } else {
      restrictedCallReturnsMap.set(
        callOption.name,
        `The result returned by '${callOption.name}' is restricted from being used. ${
          callOption.message
        }`,
      );
    }
  });

  // minor TODO: var some = new forbidden() is not prohibited currently.
  // It is a "NewExpression" and not a "CallExpression"

  return {
    CallExpression: node => {
      // If the parent is an ExpressionStatement then the return value is not being used.
      // If it is anything else (I think) then the return value is being used. More testing may be
      // required.
      if (node.parent.type === 'ExpressionStatement') {
        return;
      }

      // If the function being called is in the restrictedCallReturnsMap, report a problem.
      // The function name may be either stored at callee.name or callee.property.name.
      // myBadFunction() <== callee.name === 'myBadFunction'
      // something.myBadFunction <== callee.property.name === 'myBadFunction'
      const nameMatch = restrictedCallReturnsMap.get(node.callee.name);
      const propertyMatch =
        node.callee.property && restrictedCallReturnsMap.get(node.callee.property.name);

      const anyMatch = nameMatch || propertyMatch;
      if (anyMatch) {
        context.report({
          node: node,
          message: anyMatch,
        });
      }
    },
  };
}
