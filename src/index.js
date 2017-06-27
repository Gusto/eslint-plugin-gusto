import globalPayrollProperties from './global-payroll-properties';
import stringLiteralBlacklist from './string-literal-blacklist';
import teamAnnotations from './team-annotations';

export const rules = {
  'global-payroll-properties': globalPayrollProperties,
  'string-literal-blacklist': stringLiteralBlacklist,
  'team-annotations': teamAnnotations
};
