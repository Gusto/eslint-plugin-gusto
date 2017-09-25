# eslint-config-gusto

A shared ESLint config for Gusto's JS projects.

# Full config

The default config contains all defined rules including ES6 and React.

Install dependencies:

```sh
yarn add --dev \
  "@gusto/eslint-config-gusto@^7.0.0" \
  "babel-eslint@^7.2.2" \
  "eslint@^3.19.0" \
  "eslint-plugin-import@^2.7.0" \
  "eslint-plugin-jsx-a11y@^5.0.3" \
  "eslint-plugin-react@^7.4.0"
```

Extend the Gusto config in your ESLint config:

```js
// .eslintrc.js

module.exports = {
  extends: '@gusto/eslint-config-gusto'
}
```

# Base config

The base config contains only rules for ES6 (without React). It is currently not functional.
