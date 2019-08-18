module.exports = {
    "plugins": [
        "node",
        "security"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:node/recommended",
        "plugin:security/recommended",
        "plugin:prettier/recommended"
    ],
    "rules": {
        "node/no-unsupported-features": "off",
        "node/no-extraneous-require": "off",
        "node/exports-style": ["error", "module.exports"],
        "prettier/prettier": ["error", { "singleQuote": true, "parser": "flow" }]
    },
    "parserOptions": {
        "sourceType": "module"
    },
    "env": {
        "mocha": true,
        "node": true
    }
}
