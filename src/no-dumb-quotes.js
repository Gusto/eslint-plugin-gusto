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
  };
}
