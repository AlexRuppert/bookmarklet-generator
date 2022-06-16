import { format } from 'prettier/standalone'
import parserBabel from 'prettier/parser-babel'
import parserCss from 'prettier/parser-postcss'

export function formatScript(code) {
  try {
    return format(code, {
      semi: false,
      singleQuote: true,
      parser: 'babel',
      plugins: [parserBabel],
    })
  } catch (e) {
    console.error(e)
    return code
  }
}

export function formatCss(code) {
  try {
    return format(code, { parser: 'css', plugins: [parserCss] })
  } catch (e) {
    console.error(e)
    return code
  }
}
