export default function(context) {
  const doubleQuoteError = 'Gusto uses smartquotes, replace with open quote “ option-[ and close quote ” option-shift-[ on a mac';
  const singleQuoteError = 'Gusto uses smartquotes, replace with apostrophe ’ option-shift-] on a mac';

  return {
    Literal(node) {
      // \D = any non-digit so that using a foot or inch mark correctly i.e. 1' or 12" will not be captured
      if (/\D'/.test(node.value)) {
        context.report(node, singleQuoteError);
      }

      if (/\D"/.test(node.value)) {
        context.report(node, doubleQuoteError);
      }
    },
    TemplateLiteral(node) {
      const { hasFootMark, hasInchMark } = node.quasis.reduce((booles, quasi) => ({
        hasFootMark: booles.hasFootMark || /\D'/.test(quasi.value.cooked),
        hasInchMark: booles.hasInchMark || /\D"/.test(quasi.value.cooked),
      }), {});

      if (hasFootMark) {
        context.report(node, singleQuoteError);
      }

      if (hasInchMark) {
        context.report(node, doubleQuoteError);
      }
    },
  };
}
