module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier", "sort-keys-fix"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "no-var": "error",
    "prettier/prettier": "error",
    "sort-keys": ["error", "asc", { caseSensitive: true, natural: false }],
    "sort-keys-fix/sort-keys-fix": "warn",
  },
};
