module.exports = {
  "root": true,
  "env": {
    "node": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    "prettier" // disables eslint formatting rules which could be enabled by 3rd party tools
  ],
  "plugins": [
    "@typescript-eslint",
  ],
  "parser": "@typescript-eslint/parser",

  "ignorePatterns": [
    ".eslintrc.cjs",
    "jest.config.ts",
    "dist",
  ]
}