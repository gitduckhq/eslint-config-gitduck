module.exports = {
  extends: 'standard-with-typescript',
  rules: {
    // Take advantage of type inference
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Temporarily disable this rule
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    // Forbids `any` in _falsy_ expressions
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowAny: false,
        allowNullableBoolean: true,
        allowNullableNumber: true,
        allowNullableObject: true,
        allowNullableString: true,
        allowNumber: true,
        allowString: true,
      },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        tabWidth: 4,
      },
    ],
    'no-unused-vars': 'off',
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: false,
      },
    ],
  },
}
