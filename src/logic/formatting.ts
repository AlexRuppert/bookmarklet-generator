import beautify from 'simply-beautiful'
export function formatScript(code) {
  return beautify.js(code, {
    indent_size: 2,
  })
}

export function formatCss(code) {
  return beautify.css(code, {
    indent_size: 2,
  })
}
