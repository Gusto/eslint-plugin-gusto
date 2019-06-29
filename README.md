eslint-plugin-gusto <img src="https://travis-ci.org/Gusto/eslint-plugin-gusto.svg?branch=master" />
===================

Custom Gusto ESLint rules.

# Installation

Install [ESLint](https://www.github.com/eslint/eslint):

```sh
$ npm install --save-dev eslint
```

Install the Gusto plugin:

```sh
$ npm install --save-dev Gusto/eslint-plugin-gusto
```

# Configuration

Add `plugins` section to your `.eslintrc` and add the Gusto plugin:

```json
{
  "plugins": [
    "gusto"
  ]
}
```

Then enable all of the rules that you would like to use.

# Contribution

- Write your rule in `src/`.
- Add the rule to `src/index.js`.
- Write a test in `test/lib/rules/`.
- Build files to `lib/` using `yarn build`.
- Get a review
- Land
- Publish (instructions \[TODO\])

# TODO

- Write publish instructions in `README.md`
- Can `$image_path` rule be removed from ZP?
- Re-write rules in non-deprecated format (note at top of https://eslint.org/docs/developer-guide/working-with-rules)
- Move detailed rule descriptions into their own `.md` files and link from the main `README.md`
- Create a buildkite pipeline so it runs tests and auto-publishes?

# Rules

## Prevent usage of properties of the global `Payroll` object (global-payroll-properties)

With certain exceptions, most properties of the global `Payroll` object (`Models`, `Views`,
`Collections`, etc.) should be converted to use CommonJS imports/exports.

### Rule Details

The following patterns are considered warnings:

```js
/*eslint global-payroll-properties: 2*/

const company = new Payroll.Models.Company();
```

The following patterns are not considered warnings:

```js
/*eslint global-payroll-properties: 2*/

import Company from '../models/company';

const company = new Company();
```

```js
/*eslint global-payroll-properties: [2, {"exceptions": ["Store"]}]*/

const company = Payroll.Store.company;
```

### Rule Options

```js
"global-payroll-properties": [2, {"exceptions": <array of strings>}]
```

#### `exceptions`

Array of property names that are permitted to be used on the global `Payroll` object.

## Prevent strings from being used in string literals (string-literal-blacklist)

This rule allows you to configure a blacklist of strings that should not be used in your code.

### Rule Details

The following patterns are considered warnings:

```js
/*eslint string-literal-blacklist: [2, "$image_path("]*/

const img = <img src='$image_path(some/where/image.png)' />;

const img = <img src={`$image_path(some/where/image.png)`} />;

const src = "$image_path(some/where/image.png)";

const src = `$image_path(some/where/image.png)`;
```

The following patterns are not considered warnings:

```js
/*eslint string-literal-blacklist: [2, "$image_path("]*/

const img = <img src='some/where/image.png' />;

const img = <img src={`some/where/image.png`} />;

const src = "some/where/image.png";

const src = `some/where/image.png`;
```

### Rule Options

This rule needs set of strings to blacklist, listed after the warning level:

```js
"string-literal-blacklist": [2, <array of strings>]
```
