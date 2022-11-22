import { minify } from 'terser'

export function minifyCss(code: string): string {
  return code.replace(/\n/g, '').replace(/\s\s+/g, ' ')
}

export async function minifyJs(code: string): Promise<string> {
  console.log('in: '+ code)
  const minifiedCode = (await minify(code, { mangle: false, compress: false }))
    .code
  console.log('out: '+ minifiedCode)
  return minifiedCode
}
