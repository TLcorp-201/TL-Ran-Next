"use strict";
const path = require("path");

module.exports = {
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:compat/recommended",
    "plugin:import/warnings",
    "prettier/@typescript-eslint",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  plugins: [
    "unicorn",
    "react-hooks",
    "prettier",
    "@typescript-eslint",
    "jsx-a11y"
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jasmine: true
  },
  rules: {
    "react/jsx-wrap-multilines": 0,
    "react/prop-types": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-one-expression-per-line": 0,
    "generator-star-spacing": 0,
    "function-paren-newline": 0,
    "import/order": "warn",
    "import/no-extraneous-dependencies": [
      2,
      {
        optionalDependencies: true,
        devDependencies: [
          "next.config.js",
          "next.config.ts",
          "helper_scripts/CL_commands/*"
        ]
      }
    ],
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "linebreak-style": 0,
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",
    "import/prefer-default-export": "off",
    "import/no-default-export": [0, "camel-case"],
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": "off",
    "react/button-has-type": "off",
    // Use function hoisting to improve code readability
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true }
    ],
    // Common abbreviations are known and readable
    "unicorn/prevent-abbreviations": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "off",
      { allowTypedFunctionExpressions: true }
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true }
    ],
    "@typescript-eslint/no-var-requires": 0,
    // Common abbreviations are known and readable
    "unicorn/prevent-abbreviations": "off",
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-non-null-assertion": 0,
    "import/no-cycle": 0,
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks

    // issue https://github.com/facebook/react/issues/15204
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies

    // Conflict with prettier
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": 1,
    "object-curly-newline": 0,
    "implicit-arrow-linebreak": 0,
    "operator-linebreak": 0,
    "eslint-comments/no-unlimited-disable": 0,
    "no-param-reassign": 1,
    "space-before-function-paren": 0,
    "no-useless-constructor": "off",
    "react/prefer-stateless-function": "warn",
    "jsx-a11y/label-has-for": "warn",
    "jsx-a11y/label-has-associated-control": "warn",
    "global-require": "warn",
    "prettier/prettier": [
        "error",
        {
            "singleQuote": true,
            "tabWidth": 2,
            "trailingComma": "all"
        }
    ],
  },
  settings: {
    // support import modules from TypeScript files in JavaScript files
    "import/resolver": {
      node: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      alias: {
        map: [
          ["@", path.join(__dirname)],
          ["stories", path.join(__dirname) + "/stories"]
        ],
        extensions: [".ts", ".js", ".jsx", ".tsx"]
      }
    },
    polyfills: ["fetch", "Promise","promises", "URL", "object-assign"]
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: true,
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module"
  },
  overrides: [
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      rules: {
        "no-undef": "off"
      }
    }
  ]
};
