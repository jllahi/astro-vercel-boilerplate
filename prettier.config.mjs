/** @type {import('prettier').Config} */

export default {
  useTabs: false, // indent_style = space
  trailingComma: 'es5',
  tailwindFunctions: ['clsx', 'cn', 'tw', 'tv'],
  tailwindAttributes: ['class:list', 'cn', 'className'],
  tabWidth: 2, // indent_size = 2
  singleQuote: true, // default: false
  semi: false, // default: true
  quoteProps: 'consistent',
  printWidth: 100, // default: 80
  jsxSingleQuote: false,
  endOfLine: 'lf', // end_of_line = lf
  bracketSpacing: true,
  bracketSameLine: true,
  astroAllowShorthand: false,
  arrowParens: 'always',
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-organize-imports',
    'prettier-plugin-packagejson',
    'prettier-plugin-tailwindcss',
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
