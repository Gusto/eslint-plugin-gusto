// https://eslint.org/docs/developer-guide/working-with-rules

function preferTypescriptOverJavascript(context) {
  return {
    Program(node) {
      const filename = context.getFilename();
      if (filename.endsWith('.jsx') || filename.endsWith('.js')) {
        const [firstChild] = node.body;
        // It comes back like this
        // "options":[{"message":"custom message"}]}
        const { message } = context.options[0];
        context.report({
          node: firstChild,
          message: `JavaScript files are not allowed. Use TypeScript instead. ${message}`,
        });
      }
    },
  };
}

export default preferTypescriptOverJavascript;
