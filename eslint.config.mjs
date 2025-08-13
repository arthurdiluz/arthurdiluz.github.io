import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import promise from "eslint-plugin-promise";
import unicorn from "eslint-plugin-unicorn";
import sonarjs from "eslint-plugin-sonarjs";
import unusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2023,
        projectService: true,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      import: importPlugin,
      promise,
      unicorn,
      sonarjs,
      "unused-imports": unusedImports,
    },
    rules: {
      // Core hygiene
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-undef": "error",

      // Prefer TS-aware unused checks
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // Type safety strictness
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
      "@typescript-eslint/no-unsafe-call": "error",
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/ban-ts-comment": ["error", { "ts-ignore": true }],
      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        {
          allowNullableBoolean: true,
          allowNullableString: false,
          allowNullableNumber: false,
        },
      ],

      // Import hygiene
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"],
            ["internal"],
            ["parent", "sibling", "index"],
            ["type"],
          ],
          alphabetize: { order: "asc", caseInsensitive: true },
          "newlines-between": "always",
        },
      ],

      // Promises
      "promise/always-return": "off",
      "promise/no-return-wrap": "error",
      "promise/param-names": "error",

      // Unicorn (modern JS best practices)
      "unicorn/prefer-node-protocol": "error",
      "unicorn/filename-case": ["error", { case: "kebabCase" }],
      "unicorn/no-useless-undefined": "error",
      "unicorn/prefer-ternary": "error",

      // SonarJS (bug-prone patterns)
      "sonarjs/no-all-duplicated-branches": "error",
      "sonarjs/no-duplicated-branches": "error",
      "sonarjs/no-inverted-boolean-check": "error",
    },
  },
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "DEMO/**"],
  },
];

export default eslintConfig;
