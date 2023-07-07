module.exports = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'es5',
  semi: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.ts',
      options: {
        parser: 'typescript',
      },
    },
    {
      files: '*.tsx',
      options: {
        parser: 'typescript',
        jsxSingleQuote: true,
      },
    },
  ],
};
