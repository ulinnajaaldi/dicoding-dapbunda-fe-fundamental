module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "no-plusplus": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "no-alert": "off",
  },
};
