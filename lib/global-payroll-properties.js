'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context) {
  var config = context.options[0] || {};
  return {
    'MemberExpression': function MemberExpression(node) {
      if (isIdentifier(node.object, 'Payroll')) {
        var propertyName = getPropertyName(node);
        if (config.exceptions.indexOf(propertyName) < 0) {
          var fullProperty = context.getSourceCode().getText(getRootMemberExpression(node));
          context.report({
            node: node.property,
            message: 'Must import/require Payroll property \'' + fullProperty + '\'.'
          });
        }
      }
    }
  };
};

function isIdentifier(node, name) {
  return node.type === 'Identifier' && node.name === name;
}

function getPropertyName(node) {
  var property = node.property;

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