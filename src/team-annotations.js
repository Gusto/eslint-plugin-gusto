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

  function isValidMission(missionTag) {
    return missions.indexOf(missionTag.value.match(MISSION_REGEX)[1]) >= 0;
  }

  const TEAM_REGEX = / @team ([\w| ]*)/;
  function getTeamTag() {
    return comments.find(
      comment => comment.loc.start.line === 2 && comment.value.match(TEAM_REGEX),
    );
  }

  function isValidTeam(teamTag) {
    return teams.indexOf(teamTag.value.match(TEAM_REGEX)[1]) >= 0;
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
      } else {
        const isValid = isValidMission(missionTag);
        if (!isValid) {
          const report = {
            node: missionTag,
            message: 'The mission annotation must be a valid mission.',
          };
          context.report(report);
        }
      }

      const teamTag = getTeamTag();
      if (!teamTag) {
        const report = {
          node: { loc: { start: { line: 2, column: 0 } } },
          message:
            'A team annotation is required at the second line of the file (i.e. `# @team Owning Team`).',
        };
        context.report(report);
      } else {
        const isValid = isValidTeam(teamTag);
        if (!isValid) {
          const report = {
            node: teamTag,
            message: 'The team annotation must be a valid team.',
          };
          context.report(report);
        }
      }
    },
  };
}

teamAnnotations.schema = [
  {
    type: 'object',
    properties: {
      missions: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      teams: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
    additionalProperties: false,
  },
];

export default teamAnnotations;
