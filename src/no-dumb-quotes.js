export default function(context) {
  return {
    Literal(node) {
      // \D = any non-digit so that using a foot or inch mark correctly i.e. 1' or 12" will not be captured
      if (/\D'/.test(node.value)) {
        context.report(node, `Use an apostrophe (’) instead of a foot mark (')`);
      }

      if (/\D"/.test(node.value)) {
        context.report(node, 'Use quotes (“…”) instead of inch marks ("…")');
      }
    },
    TemplateLiteral(node) {
      const { hasFootMark, hasInchMark } = node.quasis.reduce((booles, quasi) => ({
        hasFootMark: booles.hasFootMark || /\D'/.test(quasi.value.cooked),
        hasInchMark: booles.hasInchMark || /\D"/.test(quasi.value.cooked),
      }), {});

      if (hasFootMark) {
        context.report(node, `Use an apostrophe (’) instead of a foot mark (')`);
      }

      if (hasInchMark) {
        context.report(node, 'Use quotes (“…”) instead of inch marks ("…")');
      }
    },
  };
}
