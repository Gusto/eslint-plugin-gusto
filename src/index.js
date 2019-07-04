import globalPayrollProperties from './global-payroll-properties';
import noRestrictedCallResultUse from './no-restricted-call-result-use';
import stringLiteralBlacklist from './string-literal-blacklist';
import teamAnnotations from './team-annotations';

// eslint-disable-next-line import/prefer-default-export
export const rules = {
  'global-payroll-properties': globalPayrollProperties,
  'no-restricted-call-result-use': noRestrictedCallResultUse,
  'string-literal-blacklist': stringLiteralBlacklist,
  'team-annotations': teamAnnotations,
};
