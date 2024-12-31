module.exports = {
  root: true,
  extends: [],
  rules: {},
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "no-unused-vars": "off",
        "no-console": "off",
        "no-debugger": "off",
        // Disable other rules you want to ignore here
      },
    },
  ],
};
