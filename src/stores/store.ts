import { writable, get } from 'svelte/store'
import { debounce } from 'throttle-debounce'
import { getParametersFromUrl, setParametersToUrl } from '../logic/url'
import { getBookmarkletLink } from '../logic/bookmarklet'
export const name = writable('')
export const script = writable('')
export const css = writable('')
export const bookmarkletLink = writable('')
export const scriptRaw = writable('')
export const cssRaw = writable('')
export const editMode = writable(false)

const updateUrlParameters = debounce(500, setParametersToUrl)
const updateBookmarklet = debounce(300, setBookmarkletLink)
function getCurrentState() {
  return { name: get(name), script: get(script), css: get(css) }
}

function setBookmarkletLink() {
  bookmarkletLink.set(getBookmarkletLink(get(name), get(script), get(css)))
}
name.subscribe(async name => {
  updateUrlParameters({ ...getCurrentState(), name })
  updateBookmarklet()
})

script.subscribe(async script => {
  updateUrlParameters({ ...getCurrentState(), script })
  updateBookmarklet()
})

css.subscribe(async css => {
  updateUrlParameters({ ...getCurrentState(), css })
  updateBookmarklet()
})
let minifyJs
scriptRaw.subscribe(async scriptRaw => {
  if (scriptRaw || get(script)) {
    minifyJs = minifyJs || (await import('../logic/minify')).minifyJs
    script.set(await minifyJs(scriptRaw))
  }
})
let minifyCss
cssRaw.subscribe(async cssRaw => {
  if (cssRaw || get(css)) {
    minifyCss = minifyCss || (await import('../logic/minify')).minifyCss
    css.set(minifyCss(cssRaw))
  }
})

const startParameters = getParametersFromUrl()
name.set(startParameters.name)
script.set(startParameters.script)
css.set(startParameters.css)
