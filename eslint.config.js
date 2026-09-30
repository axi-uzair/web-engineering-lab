const js = require("@eslint/js");

module.exports = [
  {
    ignores: ["node_modules/**"],
  },

  {
    files: ["eslint.config.js", "tests/**/*.js"],
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
        console: "readonly",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  {
    files: ["public/**/*.js"],
    languageOptions: {
      globals: {
        document: "readonly",
        module: "readonly",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
];
