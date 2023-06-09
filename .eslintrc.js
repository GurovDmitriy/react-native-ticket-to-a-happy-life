module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "@react-native-community",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:mobx/recommended",
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // semi: [2, "off"],
    quotes: [2, "double", { avoidEscape: true }],
  },
};
