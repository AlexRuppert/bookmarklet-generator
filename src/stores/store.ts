import { minifyCss, minifyJs } from '../logic/minify'
import { writable, readable, get } from 'svelte/store'
import { debounce } from 'throttle-debounce'
import { getParametersFromUrl, setParametersToUrl } from '../logic/url'
import { getBookmarkletLink } from '../logic/bookmarklet'
export const name = writable('')
export const script = writable('')
export const css = writable('')
export const bookmarkletLink = writable('')
export const scriptRaw = writable('')
export const cssRaw = writable('')
export const editMode = writable(true)

const updateUrlParameters = debounce(500, setParametersToUrl)
const updateBookmarklet = debounce(300, setBookmarkletLink)
function setBookmarkletLink() {
  bookmarkletLink.set(getBookmarkletLink(get(name), get(script), get(css)))
}
name.subscribe(async name => {
  updateUrlParameters({ name })
  updateBookmarklet()
})

script.subscribe(async script => {
  updateUrlParameters({ script })
  updateBookmarklet()
})

css.subscribe(async css => {
  updateUrlParameters({ css })
  updateBookmarklet()
})

scriptRaw.subscribe(async scriptRaw => {
  script.set(minifyJs(scriptRaw))
})

cssRaw.subscribe(async cssRaw => {
  css.set(minifyCss(cssRaw))
})

const startParameters = getParametersFromUrl()
name.set(startParameters.name)
script.set(startParameters.script)
css.set(startParameters.css)
