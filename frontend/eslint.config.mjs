import react from 'eslint-plugin-react'
import tsEslint from 'typescript-eslint'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import eslint from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import unusedImports from 'eslint-plugin-unused-imports'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import eslintConfigPrettier from 'eslint-config-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all,
})

export default tsEslint.config(
  eslint.configs.recommended,
  tsEslint.configs.strictTypeChecked,
  tsEslint.configs.stylisticTypeChecked,
  tsEslint.configs.recommendedTypeChecked,
  eslintConfigPrettier,
  react.configs.flat.recommended, // This is not a plugin object, but a shareable config object
  react.configs.flat['jsx-runtime'], // Add this if you are using React 17+
  jsxA11y.flatConfigs.recommended,
  ...compat.extends('airbnb-base'),
  ...compat.extends('airbnb-typescript'),
  {
    ignores: ['**/dev/*', '**/dist/*', '**/tests/*', 'eslint.config.mjs'],
  },
  {
    plugins: {
      react,
      'unused-imports': unusedImports,
      'react-hooks': pluginReactHooks,
    },
    settings: { react: { version: '18.2' } },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          '': 'never',
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      '@typescript-eslint/semi': 0,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/space-before-blocks': 'off',
      '@typescript-eslint/no-throw-literal': 'off',
      '@typescript-eslint/quotes': 'off',
      '@typescript-eslint/dot-notation': 'off',
      '@typescript-eslint/brace-style': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/comma-spacing': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/func-call-spacing': 'off',
      '@typescript-eslint/no-extra-semi': 'off',
      '@typescript-eslint/lines-between-class-members': 'off',
      '@typescript-eslint/keyword-spacing': 'off',
      '@typescript-eslint/space-before-function-paren': 'off',
      '@typescript-eslint/space-infix-ops': 'off',
      '@typescript-eslint/no-implied-eval': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'class-methods-use-this': 0,
      'jsx-a11y/href-no-hash': 'off',
      'jsx-a11y/no-autofocus': 0,
      'react/jsx-tag-spacing': 1,
      'react/no-danger': 0,
      'no-underscore-dangle': 0,
      'global-require': 0,
      'no-console': 0,
      'new-cap': 0,
      'eol-last': 0,
      'jsx-a11y/label-has-for': 0,
      'consistent-return': 0,
      'react/forbid-prop-types': 0,
      'no-unescaped-entities': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/anchor-is-valid': 0,
      'no-shadow': 0,
      'prefer-promise-reject-errors': 0,
      'function-paren-newline': 0,
      'react/destructuring-assignment': 0,
      'react/jsx-one-expression-per-line': 0,
      'react/jsx-props-no-spreading': 0,
      'import/prefer-default-export': 0,
      'react/function-component-definition': 0,
      'operator-linebreak': 0,
      'jsx-a11y/no-noninteractive-element-interactions': 0,
      'jsx-a11y/label-has-associated-control': 0,
      'no-nested-ternary': 0,
      'react/jsx-filename-extension': 0,
      'react/require-default-props': 0,
      'template-curly-spacing': 'off',
      'object-curly-newline': 'off',
      '@typescript-eslint/object-curly-spacing': 'off',
      'implicit-arrow-linebreak': 'off',
    },
  }
)
