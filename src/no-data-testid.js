function noDataTestId(context){
  return {
    "JSXAttribute": function(node) {
      if(node.name.type === "JSXIdentifier" && node.name.name === 'data-testid') {
        context.report(node, "Avoid using `data-testid` when possible. Try to test your component as a user would.");
      }
    }
  };
}

export default noDataTestId;
