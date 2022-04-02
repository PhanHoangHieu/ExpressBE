module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.eslint.json",
        sourceType: "module",
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    plugins: ["@typescript-eslint", "import"],
    rules: {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/unified-signatures": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "import/no-unresolved": "off",
        "import/no-deprecated": "warn",
        "import/no-extraneous-dependencies": "error",
        "import/no-unassigned-import": "warn",
        "import/no-duplicates": "error",
        "import/namespace": "error",
        "no-cond-assign": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-empty": [
            "error",
            {
                allowEmptyCatch: true,
            },
        ],
        "no-new-wrappers": "error",
        "no-param-reassign": "error",
        "no-redeclare": "error",
        "no-sequences": "error",
        "no-shadow": "off",
        "no-throw-literal": "error",
        "no-unsafe-finally": "error",
        "no-unused-labels": "error",
        "no-var": "error",
        "no-void": "error",
        "comma-dangle": ["error", "always-multiline"],
        "prefer-const": "warn",
        "indent": ["error", 2],
        "max-len": ["error", 80],
        "quotes": [
            "error",
            "double"
        ]
    },
    overrides: [{
        // Enable the rule specifically for TypeScript, Yaml files
        files: ["*.ts", "*.tsx", "*.yaml", "*.yml"],
        plugins: ["yaml"],
        extends: ["plugin:yaml/recommended"],
        rules: {},
    }, ],
    settings: {
        "import/resolver": {
            typescript: {},
        },
        jsdoc: {
            tagNamePreference: {
                returns: "return",
            },
        },
        react: {
            version: "999.999.999",
        },
    },
};