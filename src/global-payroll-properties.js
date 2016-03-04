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

function globalPayrollProperties(context) {
  const exceptions = (context.options[0] || {}).exceptions || [];

  return {
    'MemberExpression': function(node) {
      if (isIdentifier(node.object, 'Payroll')) {
        const propertyName = getPropertyName(node);
        if (exceptions.indexOf(propertyName) < 0) {
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

globalPayrollProperties.schema = [
  {
    'type': 'object',
    'properties': {
      'exceptions': {
        'type': 'array',
        'items': {
          'type': 'string'
        }
      }
    },
    'additionalProperties': false
  }
];

export default globalPayrollProperties;
