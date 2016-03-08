eslint-plugin-gusto
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
