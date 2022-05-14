module.exports = {
    tabWidth: 4,
    jsxSingleQuote: true,
    jsxBracketSameLine: true,
    printWidth: 180,
    singleQuote: true,
    // trailingComma: 'none',
    semi: false,
    overrides: [
      {
        files: '*.json',
        options: {
          printWidth: 200,
        },
      },
    ],
    arrowParens: 'always',
  }
  