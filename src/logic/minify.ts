import jsTokens from 'js-tokens'

export function minifyCss(code: string): string {
  return code.replace(/\n/g, '').replace(/\s\s+/g, ' ')
}

const excludeTokens = [
  'SingleLineComment',
  'MultiLineComment',
  'WhiteSpace',
  'LineTerminatorSequence',
]
const punctuatorsNeedSemicolon = /[\)\]\}]/

export function minifyJs(code: string): string {
  const tokens = Array.from(jsTokens(code))
  const result = tokens
    .filter(t => !excludeTokens.includes(t.type))
    .map((t, i, arr) => {
      if (
        t.type === 'IdentifierName' &&
        arr[i + 1]?.type === 'IdentifierName'
      ) {
        t.value += ' '
      }
      if (
        (t.type.includes('Literal') ||
          t.type.includes('Template') ||
          (t.type === 'Punctuator' &&
            punctuatorsNeedSemicolon.test(t.value))) &&
        arr[i + 1]?.type === 'IdentifierName'
      ) {
        t.value += ';'
      }
      if (
        t.type === 'Punctuator' &&
        arr[i + 1]?.type === 'Punctuator' &&
        punctuatorsNeedSemicolon.test(arr[i + 1].value)
      ) {
        t.value = ''
      }

      return t.value
    })
  return result.join('')
}
