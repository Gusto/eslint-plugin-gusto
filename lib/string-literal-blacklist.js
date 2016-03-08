'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function stringLiteralBlacklist(context) {
  var blacklist = context.options || [];

  function blacklistMatch(value) {
    for (var i = 0; i < blacklist.length; i++) {
      var literal = blacklist[i];
      if (value.indexOf(literal) >= 0) {
        return literal;
      }
    }
  }

  function report(literal, node) {
    context.report({
      node: node,
      message: 'String literal \'' + literal + '\' is blacklisted'
    });
  }

  return {
    'Literal': function Literal(node) {
      var match = blacklistMatch(node.value);
      if (match) {
        report(match, node);
      }
    },
    'TemplateElement': function TemplateElement(node) {
      var match = blacklistMatch(node.value.cooked);
      if (match) {
        report(match, node.parent);
      }
    }
  };
}

stringLiteralBlacklist.schema = {
  type: 'array',
  items: {
    type: ['string', 'number']
  },
  uniqueItems: true
};

exports.default = stringLiteralBlacklist;