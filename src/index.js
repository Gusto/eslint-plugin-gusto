import globalPayrollProperties from './global-payroll-properties';
import stringLiteralBlacklist from './string-literal-blacklist';
import teamAnnotations from './team-annotations';

// eslint-disable-next-line import/prefer-default-export
export const rules = {
  'global-payroll-properties': globalPayrollProperties,
  'string-literal-blacklist': stringLiteralBlacklist,
  'team-annotations': teamAnnotations,
};
