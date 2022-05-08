export function getBookmarkletLink(name, script, css) {
  let cssPart =
    css.trim().length > 0
      ? `var style=document.createElement('style');style.textContent=\`${css}\`;document.head.append(style);`
      : ''
  let jsPart = script.trim().length > 0 ? `${script}` : ''
  let result = `javascript:(async()=>{${cssPart + jsPart}})()`
  return result
}
