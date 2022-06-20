module.exports = {
  extends: ['next/core-web-vitals', 'airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },

  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'consistent-return': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react/jsx-filename-extension': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'prettier/prettier': 'off',
    'no-unused-vars': 'warn',
    'react/self-closing-comp': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/aria-proptypes': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    eqeqeq: 'warn',
    'react/no-children-prop': 'warn',
    'object-shorthand': 'warn',
    'react/jsx-key': 'error',
    'default-param-last': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unneeded-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'no-shadow': 'warn',
    'import/no-extraneous-dependencies': 'warn',
  },
}
