function stringLiteralBlacklist(context) {
  const blacklist = context.options || [];

  function blacklistMatch(value) {
    for (let i = 0; i < blacklist.length; i += 1) {
      const literal = blacklist[i];
      if (value.indexOf(literal) >= 0) {
        return literal;
      }
    }
    return null;
  }

  function report(literal, node) {
    context.report({
      node,
      message: `String literal '${literal}' is blacklisted`,
    });
  }

  return {
    Literal: node => {
      if (typeof node.value === 'string') {
        const match = blacklistMatch(node.value);
        if (match) {
          report(match, node);
        }
      }
    },
    TemplateElement: node => {
      const match = blacklistMatch(node.value.cooked);
      if (match) {
        report(match, node.parent);
      }
    },
  };
}

stringLiteralBlacklist.schema = {
  type: 'array',
  items: {
    type: ['string', 'number'],
  },
  uniqueItems: true,
};

export default stringLiteralBlacklist;
