function isIdentifier(node, name) {
  return node.type === 'Identifier' && node.name === name;
}

function getPropertyName(node) {
  const {property} = node;
  switch (property.type) {
  case 'Identifier':
    return property.name;
  case 'Literal':
    return property.value;
  default:
    return null;
  }
}

function getRootMemberExpression(node) {
  while (node.parent.type === 'MemberExpression') {
    node = node.parent;
  }

  return node;
}

export default function(context) {
  const config = context.options[0] || {};
  return {
    'MemberExpression': function(node) {
      if (isIdentifier(node.object, 'Payroll')) {
        const propertyName = getPropertyName(node);
        if (config.exceptions.indexOf(propertyName) < 0) {
          const fullProperty = context.getSourceCode().getText(getRootMemberExpression(node));
          context.report({
            node: node.property,
            message: `Must import/require Payroll property '${fullProperty}'.`
          });
        }
      }
    }
  };
}
