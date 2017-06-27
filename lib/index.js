'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rules = undefined;

var _globalPayrollProperties = require('./global-payroll-properties');

var _globalPayrollProperties2 = _interopRequireDefault(_globalPayrollProperties);

var _stringLiteralBlacklist = require('./string-literal-blacklist');

var _stringLiteralBlacklist2 = _interopRequireDefault(_stringLiteralBlacklist);

var _teamAnnotations = require('./team-annotations');

var _teamAnnotations2 = _interopRequireDefault(_teamAnnotations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rules = exports.rules = {
  'global-payroll-properties': _globalPayrollProperties2.default,
  'string-literal-blacklist': _stringLiteralBlacklist2.default,
  'team-annotations': _teamAnnotations2.default
};