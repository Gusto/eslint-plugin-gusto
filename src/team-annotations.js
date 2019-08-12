function teamAnnotations(context) {
  const { missions, teams } = context.options[0] || {};

  const sourceCode = context.getSourceCode();
  const comments = sourceCode.getAllComments();

  const MISSION_REGEX = / @mission ([\w| ]*)/;
  function getMissionTag() {
    return comments.find(
      comment => comment.loc.start.line === 1 && comment.value.match(MISSION_REGEX),
    );
  }

  const TEAM_REGEX = / @team ([\w| ]*)/;
  function getTeamTag() {
    return comments.find(
      comment => comment.loc.start.line === 2 && comment.value.match(TEAM_REGEX),
    );
  }

  return {
    Program() {
      const missionTag = getMissionTag();
      if (!missionTag) {
        const report = {
          node: { loc: { start: { line: 1, column: 0 } } },
          message:
            'A mission annotation is required at the top of the file (i.e. `# @mission Owning Mission`).',
        };
        context.report(report);
      }

      const teamTag = getTeamTag();
      if (!teamTag) {
        const report = {
          node: { loc: { start: { line: 2, column: 0 } } },
          message:
            'A team annotation is required at the second line of the file (i.e. `# @team Owning Team`).',
        };
        context.report(report);
      }
    },
  };
}

export default teamAnnotations;
