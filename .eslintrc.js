const path = require('path');

module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
  ],
  "globals": {
    "__DEV__": true,
  },
  "env": {
    "browser": true,
  },
  "rules": {
    "arrow-body-style": "off",
    "function-paren-newline": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "no-console": "off",
    "no-restricted-globals": "off",
    "object-curly-newline": "off",
  }
}
