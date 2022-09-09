module.exports = {
  root: true,
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "@typescript-eslint/no-use-before-define": ["off"],
    '@typescript-eslint/explicit-function-return-type': 'off',
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
}

