# eslint-config-gitduck

#### An [ESLint shareable config](https://eslint.org/docs/developer-guide/shareable-configs) for TypeScript that is based on [eslint-config-standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript) and has GidDuck specific rules.

[![JavaScript Style Guide - Standard Style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

Run the following command:

```shell
npm install --save-dev \
  eslint@7 \
  eslint-config-standard@14 \
  eslint-plugin-standard@4 \
  eslint-plugin-promise@4 \
  eslint-plugin-import@2 \
  eslint-plugin-node@11 \
  eslint-plugin-react@7 \
  typescript@3 \
  @typescript-eslint/eslint-plugin@3 \
  @typescript-eslint/parser@3 \
  eslint-config-standard-with-typescript@18 \
  github:gitduckhq/eslint-config-gitduck
```

Here is an example `.eslintrc.js`:

```javascript
module.exports = {
  extends: 'gitduck',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
}
```

*Note: The `eslint-config-` prefix in `extends` is omitted since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into this file.
