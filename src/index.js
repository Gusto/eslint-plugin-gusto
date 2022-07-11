import globalPayrollProperties from './global-payroll-properties';
import noDumbQuotes from './no-dumb-quotes';
import noRestrictedCallResultUse from './no-restricted-call-result-use';
import preferTypescriptOverJavascript from './prefer-typescript-over-javascript';
import stringLiteralBlacklist from './string-literal-blacklist';
import teamAnnotations from './team-annotations';

// eslint-disable-next-line import/prefer-default-export
export const rules = {
  'global-payroll-properties': globalPayrollProperties,
  'no-dumb-quotes': noDumbQuotes,
  'no-restricted-call-result-use': noRestrictedCallResultUse,
  'prefer-typescript-over-javascript': preferTypescriptOverJavascript,
  'string-literal-blacklist': stringLiteralBlacklist,
  'team-annotations': teamAnnotations,
};
