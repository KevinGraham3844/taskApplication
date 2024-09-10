module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base",
        "prettier"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}",
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "no-param-reassign": 0,
        "no-underscore-dangle":  ["error", { "allow": ["_id", "__v"] }],
        "prefer-destructuring": ["error", {"object": false, "array": false}],
        "consistent-return": "off",
        "no-else-return": "off"
    },
    "ignorePatterns": ["tests", "dist"],
}
