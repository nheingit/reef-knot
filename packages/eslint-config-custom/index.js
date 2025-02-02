module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "airbnb",
    "@lidofinance",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "turbo"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module",
    "project": ["tsconfig.json"]
  },
  "plugins": ["@typescript-eslint", "react"],
  "rules": {
    "prettier/prettier": ["error", {}, { "usePrettierrc": true }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "react/destructuring-assignment": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-no-duplicate-props": ["error", { "ignoreCase": false }],
    "react/jsx-no-bind": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "^_"
      }
    ],
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "import/no-mutable-exports": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "func-names": "off",
    "no-console": "off",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "consistent-return": "off",
    "no-use-before-define": "off",
    "no-underscore-dangle": "off",
    "no-bitwise": "off",
    "no-return-await": "off",
    "no-nested-ternary": "off",
    "no-restricted-syntax": "off",
    "no-case-declarations": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "typescript": {}
    }
  },
  "ignorePatterns": ["*.js", "dist", "node_modules"]
}
