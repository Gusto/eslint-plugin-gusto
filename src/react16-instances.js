// const fullProperty = context.getSourceCode().getText(node);

export const RENDERSUBCOMPONENT_RETURN_ERROR = `Using the instance returned by renderSubComponent
  is deprecated because it will break in React 16. If you need to read the state use callback props
  instead.`;

export default function(context) {
  return {
    // We-written as `'no-restricted-properties': ... { property: 'reactSubComponents' }`
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

    CallExpression: function(node) {
      // The function being called must be 'renderSubComponent'. The parent must be an expression.
      // The parent must be an ExpressionStatement; otherwise it is doing something with the return value.
      if (
        (node.callee.name === 'renderSubComponent' ||
          (node.callee.property &&
            node.callee.property.name === 'renderSubComponent')) &&
        node.parent.type !== 'ExpressionStatement'
      ) {
        context.report({
          node: node,
          message: RENDERSUBCOMPONENT_RETURN_ERROR
        });
      }
    }
    
    // BROKEN VERSION left as an example. It only finds assignments. It fails to find returns, member access, etc.
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
  };
}
