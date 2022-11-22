import { deserialize, serialize } from './utils'

export function getParametersFromUrl() {
  const urlSearchParams = new URLSearchParams(window.location.search)
  let params = Object.fromEntries(urlSearchParams.entries())
  let defaults = {
    script: '',
    css: '',
    name: '',
  }
  const hash = window.location.hash.substring(1)
  if (hash.length > 0) {
    try {
      params = deserialize(hash)
    } catch (error) {
      console.log(error)
    }
  }
  return Object.assign(defaults, params)
}

export function setParametersToUrl(parameters: { [s: string]: string }) {
  if (window.location.search) {
    window.history.pushState(
      null,
      '',
      new URL(
        window.location.href.replace(window.location.search, '')
      ).toString()
    )
  }
  window.location.hash = serialize(parameters)
}
