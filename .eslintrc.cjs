module.exports = {
  root: true,
  ignorePatterns: ['.eslintrc.*', '*.config.js', '*.config.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json', './test/tsconfig.spec.json'],
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/consistent-type-definitions': 'off',
  },
};
