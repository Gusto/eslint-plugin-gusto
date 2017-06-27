'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function teamAnnotations(context) {
  var _ref = context.options[0] || {},
      missions = _ref.missions,
      teams = _ref.teams;

  var sourceCode = context.getSourceCode();
  var comments = sourceCode.getAllComments();

  var MISSION_REGEX = / @mission ([\w| ]*)/;
  function getMissionTag() {
    return comments.find(function (comment) {
      return comment.loc.start.line === 1 && comment.value.match(MISSION_REGEX);
    });
  }

  function isValidMission(missionTag) {
    return missions.includes(missionTag.value.match(MISSION_REGEX)[1]);
  }

  var TEAM_REGEX = / @team ([\w| ]*)/;
  function getTeamTag() {
    return comments.find(function (comment) {
      return comment.loc.start.line === 2 && comment.value.match(TEAM_REGEX);
    });
  }

  function isValidTeam(teamTag) {
    return teams.includes(teamTag.value.match(TEAM_REGEX)[1]);
  }

  return {
    Program: function Program() {
      var missionTag = getMissionTag();
      if (!missionTag) {
        var report = {
          node: { loc: { start: { line: 1, column: 0 } } },
          message: 'A mission annotation is required at the top of the file (i.e. `# @mission Owning Mission`).'
        };
        context.report(report);
      } else {
        var isValid = isValidMission(missionTag);
        if (!isValid) {
          var _report = {
            node: missionTag,
            message: 'The mission annotation must be a valid mission.'
          };
          context.report(_report);
        }
      }

      var teamTag = getTeamTag();
      if (!teamTag) {
        var _report2 = {
          node: { loc: { start: { line: 2, column: 0 } } },
          message: 'A team annotation is required at the second line of the file (i.e. `# @team Owning Team`).'
        };
        context.report(_report2);
      } else {
        var _isValid = isValidTeam(teamTag);
        if (!_isValid) {
          var _report3 = {
            node: teamTag,
            message: 'The team annotation must be a valid team.'
          };
          context.report(_report3);
        }
      }

      return;
    }
  };
}

teamAnnotations.schema = [{
  'type': 'object',
  'properties': {
    'missions': {
      'type': 'array',
      'items': {
        'type': 'string'
      }
    },
    'teams': {
      'type': 'array',
      'items': {
        'type': 'string'
      }
    }
  },
  'additionalProperties': false
}];

exports.default = teamAnnotations;